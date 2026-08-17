import { useCallback, useEffect, useState } from "react";
import api from "../api/axios";

const useGet = (url, params = {}, options = {}) => {
    const {
        enabled = true,
        immediate = true,
    } = options;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(immediate && enabled);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        if (!url) return;

        try {
            setLoading(true);
            setError(null);

            const response = await api.get(url, {
                params,
            });

            setData(response.data);
        } catch (err) {
            setError(
                err?.response?.data ||
                err?.message ||
                "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    }, [url, JSON.stringify(params)]);

    useEffect(() => {
        if (enabled && immediate) {
            fetchData();
        }
    }, [enabled, immediate, fetchData]);

    return {
        data,
        loading,
        error,
        refetch: fetchData,
    };
};

export default useGet;

///////////************************************************** use it in any component like below */
import useGet from "../hooks/useGet";

const TeacherList = () => {
    const {
        data,
        loading,
        error,
        refetch,
    } = useGet("/teachers");

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading teachers</p>;
    }

    return (
        <div>
            {data?.data?.map((teacher) => (
                <div key={teacher.id}>
                    {teacher.name}
                </div>
            ))}

            <button onClick={refetch}>
                Refresh
            </button>
        </div>
    );
};

export default TeacherList;
/************* Passing query parameters ***************/
const {
    data,
    loading,
    error,
} = useGet("/teachers", {
    classroom_id: 10,
    page: 1,
    limit: 20,
});