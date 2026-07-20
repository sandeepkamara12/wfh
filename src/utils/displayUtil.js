export const getDisplayName = (data) => {
    if (data?.married) {
        if (!data?.spouse_name) return "";
        return `${data.gender === "male" ? "S: Mrs." : "Mr."} ${data.spouse_name}`;
    }

    const father = data?.father_name ? `F: Mr. ${data.father_name}` : "";
    const mother = data?.mother_name ? `M: Mrs. ${data.mother_name}` : "";

    if (father && mother) return `${father}, ${mother}`;
    return father || mother || "";
};
