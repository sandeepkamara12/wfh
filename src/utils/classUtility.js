export const groupClasses = (data) => {
    const map = new Map();

    data.forEach((item) => {
        const key = `${item.class}-${item.section}-${item.stream || ""}`;

        if (!map.has(key)) {
            map.set(key, {
                class: item.class,
                section: item.section,
                stream: item.stream,
                subjects: new Set(),
            });
        }

        map.get(key).subjects.add(item.subject);
    });

    return Array.from(map.values()).map((item) => ({
        ...item,
        subjects: Array.from(item.subjects),
    }));
};