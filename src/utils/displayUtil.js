export const getDisplayName = (data) => {
    if (data?.married) {
        if (!data?.spouse_name) return "";
        return `${data.gender === "male" ? "Mrs." : "Mr."} ${data.spouse_name}`;
    }

    const father = data?.father_name ? `Mr. ${data.father_name}` : "";
    const mother = data?.mother_name ? `Mrs. ${data.mother_name}` : "";

    if (father && mother) return `${father}, ${mother}`;
    return father || mother || "";
};
