const form = document.getElementById("form");
const fname_input = document.getElementById("fname");
const lname_input = document.getElementById("lname");
const orgTitle_input = document.getElementById("organization-title");
const email_input = document.getElementById("email");
const contact_input = document.getElementById("tel");
const orgName_input = document.getElementById("organization");
const membership_input = document.getElementById("membership-level");
const orgDescription_input = document.getElementById("organization-description");

form.addEventListener('submit', (e) => {
    let errors = [];

    if (fname_input) {
        errors = getSignupFormErrors(
            fname_input.value,
            lname_input.value,
            orgTitle_input.value, 
            email_input.value,
            contact_input.value,
            orgName_input.value,
            membership_input.value,
            orgDescription_input.value.trim()
        );
    }

    console.log(errors);

    if (errors.length > 0) {
        e.preventDefault(); 
    }
});

function getSignupFormErrors(fname, lname, orgTitle, email, contact, orgName, membership, orgDescription) {
    let errors = [];
    const OrgTitleRegEx = /^[A-Za-z\- ]{7,}$/;
    const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,9}[-.\s]?\d{1,9}[-.\s]?\d{1,9}$/;


    if (fname === '' || fname === null) {
        errors.push('First name is required');
        fname_input.classList.add('incorrect');
    }

    if (lname === '' || lname === null) {
        errors.push('Last name is required');
        lname_input.classList.add('incorrect');
    }

    if (orgTitle === '' || orgTitle === null || !OrgTitleRegEx.test(orgTitle.trim())) {
        errors.push('Organization title is required');
        orgTitle_input.classList.add('incorrect');
    }else{

    }

    if (email === '' || email === null) {
        errors.push('Email is required');
        email_input.classList.add('incorrect');
    }

    if (contact === '' || contact === null || !phoneRegex.test(contact.trim())) {
        errors.push('Contact number is required');
        contact_input.classList.add('incorrect');
    }


    if (orgName === '' || orgName === null) {
        errors.push('Organization name is required');
        orgName_input.classList.add('incorrect');
    }

    if (membership === '' || membership === null) {
        errors.push('Membership level is required');
        membership_input.classList.add('incorrect');
    }

    if (orgDescription.trim() === '') {
        errors.push('Organization description is required');
        orgDescription_input.classList.add('incorrect');
    }

    return errors;
}
