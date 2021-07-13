const createValidation = () => {
    let prevSearch = '';

    return (value) => {
        if (!value) {
            alert("Field is empty!");
            return false;
        }

        if (value === prevSearch) {
            alert("You have already search it!");
            return false;
        }

        prevSearch = value;
        return true;
    }
}
