export const refresh = () => {
    const list = document.querySelector("#list");

    const existingItems = JSON.parse(localStorage.getItem("items"));
    if (existingItems !== '') {
        existingItems.forEach((item) => {
                const refreshItems = document.createElement("li");

                refreshItems.innerText = item;

                list.appendChild(refreshItems);
            }
        )
    }
}