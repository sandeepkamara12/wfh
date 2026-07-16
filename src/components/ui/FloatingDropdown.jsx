import React from 'react'
import {
    useFloating,
    offset,
    flip,
    shift,
    arrow,
    autoUpdate,
    useClick,
    useDismiss,
    useInteractions,
} from '@floating-ui/react';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function FloatingDropdown({
    trigger,
    children,
    placement = 'bottom-end',
}) {
    const [open, setOpen] = useState(false);

    const arrowRef = useRef(null);

    const {
        x,
        y,
        refs,
        strategy,
        context,
        middlewareData,
    } = useFloating({
        open,
        onOpenChange: setOpen,
        placement,
        middleware: [
            offset(10),
            flip(),
            shift({ padding: 5 }),
            arrow({ element: arrowRef.current || null }),
        ],
        whileElementsMounted: autoUpdate,
    });

    // 🧠 Built-in interactions (better than manual outside click)
    const click = useClick(context);
    const dismiss = useDismiss(context); // outside click + escape

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss,
    ]);

    const { x: arrowX, y: arrowY } = middlewareData.arrow || {};

    return (
        <>
            {/* 🔘 Trigger */}
            <div
                ref={refs.setReference}
                {...getReferenceProps()}
                style={{ display: 'inline-block' }}
            >
                {trigger}
            </div>

            {/* 📦 Dropdown */}
            {open &&
                createPortal(
                    <div
                        ref={refs.setFloating}
                        {...getFloatingProps()}
                        style={{
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                            zIndex: 9999,
                        }}
                        className="bg-white relative z-50 border border-gray-200 rounded shadow-lg"
                    >
                        {/* 🔺 Arrow */}
                        <div
                            ref={arrowRef}
                            style={{
                                position: 'absolute',
                                left: arrowX ?? '',
                                top: '-5px',
                                width: 10,
                                height: 10,
                                background: 'white',
                                zIndex:-1,  
                                transform: 'rotate(45deg)',
                            }}
                        />

                        {/* 📋 Content */}
                        <div className="p-2">{children}</div>
                    </div>,
                    document.body
                )}
        </>
    );
}