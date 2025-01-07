const DATA_NAME = "userData";

const getLocalStorageData = (dataName) => {
    const localData = localStorage.getItem(dataName);

    return localData ? JSON.parse(localData) : [];
};

const showData = () => {
    console.log(getLocalStorageData(DATA_NAME));
};

const processData = () => {
    const userData = getLocalStorageData(DATA_NAME);

    const firstName = document.forms["user-data"]["first-name"].value;
    const lastName = document.forms["user-data"]["last-name"].value;

    userData.push({firstName, lastName});

    localStorage.setItem(DATA_NAME, JSON.stringify(userData));
};
