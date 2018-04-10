import UniversalForm from './src/components/UniversalForm';

let model = {
    fields : [
        {
            type: 'text',
            id: 'firstName',
            name: 'first_name',
            label: 'First Name',
            placeHolder: 'First Name',
            classList: ['universal-form-input', 'first-name-input']
        },
        {
            type: 'text',
            id: 'lastName',
            name: 'last_name',
            label: 'Last Name',
            placeHolder: 'Last Name',
            classList: ['universal-form-input', 'last-name-input']
        },
        {
            type: 'number',
            id: 'age',
            name: 'age',
            label: 'Age',
            placeHolder: 'Your Age',
            classList: ['universal-form-input', 'age-input']
        },
        {
            type: 'url',
            id: 'userHomepage',
            name: 'homepage',  
            label: 'Home Page',
            placeHolder: 'http://google.com',
            classList: ['universal-form-input', 'user-homepage-input']
        },
        {
            type: 'email',
            id: 'userEmail',
            name: 'email',
            label: 'Email Address',
            placeHolder: 'user@domain.com',
            classList: ['universal-form-input', 'email-input']
        },
        {
            type: 'tel',
            id: 'phoneNumber',
            name: 'phone_number',
            label: 'Phone Number',
            placeHolder: '(937)-111-1123',
            classList: ['universal-form-input', 'phone-input']
        },
        {
            type: 'file',
            id: 'userid',
            name: 'user_id',
            label: 'Please provide a copy of your drivers license',
            placeHolder: '',
            classList: ['universal-form-input', 'id-input']
        },
        {
            type: 'color',
            id: 'faveColor',
            name: 'fave_color',
            label: 'Favorite Color',
            placeHolder: 'Blue',
            classList: ['universal-form-input', 'fave-color-input']
        },
        {
            type: 'select',
            id: 'faveFood',
            name: 'fave_food',
            label: 'Favorite Food',
            placeHolder: 'Pizza',
            classList: ['universal-form-input', 'fave-food-input'],
            options: [
                { label: 'Pizza', value: 'Pizza' },
                { label: 'Pizza', value: 'Pizza' },
                { label: 'Pizza', value: 'Pizza' },
                { label: 'Pizza', value: 'Pizza' },
                { label: 'Pizza', value: 'Pizza' },
                { label: 'Tacos', value: 'Tacos' },
            ]
        },
        {
            type: 'submit',
            id: 'submitButton',
            name: 'submit_button',
            initialValue: 'Submit',
            classList: ['universal-form-input']
        }
    ]
};

let newComp = new UniversalForm({
    id: 'new-comp-wrap',
    classes: ['new-comp-wrap', 'new-comp'],
    beforeMount: () => console.log('Before Mount!'),
    whenMounted: () => console.log('Mounted!'),
    beforeUnmount: () => console.log('Before Unmount!'),
    whenUnmounted: () => console.log('Unmounted!'),
    beforeUpdate: () => console.log('Before Update!'),
    whenUpdated: () => console.log('After Update!'),
    model
});

newComp.mount(document, '#app');