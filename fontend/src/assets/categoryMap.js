export const categoryDisplay = {
    "Drinks": "ĐỒ UỐNG",
    "Pizza": "PIZZA",
    "Chicken": "NGHIỀN GÀ",
    "Appetizer": "MÓN KHAI VỊ",
    "Drinking Food": "ĐỒ NHẬU",
    "Rice Dishes": "CƠM",
    "Beverages": "ĐỒ UỐNG",
    "Fast Food": "ĐỒ ĂN NHANH",
    "Slow Food": "ĐỒ ĂN CHẬM",
};

// Hàm tiện dụng
export const getDisplayName = (category) => {
    return categoryDisplay[category] || category; // fallback nếu không có
};

export const getCategoryValue = (displayName) => {
    return Object.keys(categoryDisplay).find(key => categoryDisplay[key] === displayName) || displayName;
};