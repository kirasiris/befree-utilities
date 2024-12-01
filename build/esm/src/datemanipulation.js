// Description: Calculates the time elapsed since a given date and returns it as a human-readable string
// Input example: calculateTimeSincePublished("2024-11-28T10:00:00Z");
// Output example: "2 days ago"
const calculateTimeSincePublished = (createdAt = "") => {
    const currentTime = new Date();
    const publishedTime = new Date(createdAt);
    const timeDifference = currentTime.getTime() - publishedTime.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) {
        return `${days} day${days > 1 ? "s" : ""} ago`;
    }
    else if (hours > 0) {
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }
    else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    }
    else {
        return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }
};
// Description: Formats a given date into a human-readable string, showing only the date without the time
// Input example: formatDateWithoutTime("2024-11-28T10:00:00Z");
// Output example: "11/28/2024" // (for en-US locale)
const formatDateWithoutTime = (createdAt = "") => {
    return new Date(createdAt).toLocaleDateString();
};
export { calculateTimeSincePublished, formatDateWithoutTime };
