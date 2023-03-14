const form = document.querySelector("#form");
const [ fname, lname, email] = form;
const fields = [
    fname, lname, email
];
let formHasError = false;

fields.forEach((f) => {
    f.addEventListener(
        "change",
        (e) => {
            if (e.target.value.trim() !== "") {
                e.target.classList.remove("error");
            }
        }
    );
});

form.addEventListener(
    "submit",
    (e) => {
        e.preventDefault();
        
        fields.forEach(
            (e) => {
                if (
                    e.value.trim() === "" &&
                    !e.classList.contains("error")
                ) {
                    e.classList.add("error");
                    triggerError(e.placeholder);
                    formHasError = true;
                }
            }
        );

        if (fields.every(f => f.value.trim() !== "")) {
            Toastify({
                text: "Data has been sent! Let's buld a better world together! 🌱",
                className: "custom-toast success"
            }).showToast();

            e.target.reset();
        }
    }
)

function triggerError(fieldName) {
    Toastify({
        text: "Please, fill in the " + fieldName + " field correctly!",
        className: "custom-toast warning"
    }).showToast();
}