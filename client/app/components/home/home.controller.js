class HomeController {
  constructor() {
    let ctrl = this;
    ctrl.name = 'home';

    // Phone's company list
    ctrl.phoneCompanies = [
      { name: 'Tim', code: 41, category: 'Mobile' },
      { name: 'Oi', code: 14, category: 'Mobile' },
      { name: 'Vivo', code: 15, category: 'Mobile' },
      { name: 'Claro', code: 25, category: 'Mobile' },
      { name: 'Sercomtel', code: 43, category: 'Home' },
      { name: 'Embratel', code: 43, category: 'Home' },
      { name: 'Telefônica', code: 43, category: 'Home' },
    ];

    // Colors' list
    ctrl.colors = [{ name: 'green' }, { name: 'blue' }, { name: 'yellow' }, { name: 'black'}, { name: 'pink' }, { name: 'red' }];

    // Contacts' list
    ctrl.contacts = [
      { name: 'Paulo Cesar', phone: '48996742674', date: new Date(), phoneCompany: { name: 'Tim', code: 41, category: 'Mobile' }, color: { name: 'green' }, isSelected: false },
      { name: 'Claudia Rodrigues', phone: '48996024800', date: new Date(), phoneCompany: { name: 'Telefônica', code: 43, category: 'Home' }, color: { name: 'pink' }, isSelected: false },
      { name: 'Jaqueline Ferreira', phone: '48999550356', date: new Date(), phoneCompany: { name: 'Claro', code: 25, category: 'red' }, color: { name: 'red' }, isSelected: false }
    ];

    // All selected contacts flag
    ctrl.isSelectedContacts = false;

    ctrl.isSubmittedForm = false;
  }

  // Add a contact
  add(contact, phoneForm) {
    let ctrl = this;
    ctrl.isSubmittedForm = true;
    if(phoneForm.$valid) {
      contact.isSelected = false;
      ctrl.contacts.push(angular.copy(contact));
      ctrl.resetForm(phoneForm);
    }
  }

  // Clean all the form
  resetForm(form) {
    let ctrl = this;
    ctrl.contact = {};
    ctrl.isSubmittedForm = false;
    form.$setPristine(); // Also toggle form as unsubmitted
    form.$setUntouched();
  }

  // Delete all selected contacts
  remove(contacts) {
    let ctrl = this;
    ctrl.contacts = contacts.filter((contact) => {
      if(!contact.isSelected) return contact;
    });
  }

  // Verify if has selected contact on list
  hasSelectedContact(contacts) {
    return contacts.some((contact) => {
      return contact.isSelected;
    })
  }

  // Verify if has some contact on list
  hasContacts(contacts) {
    return contacts.length > 0;
  }

  // Selected or unselect all contacts
  selectedAllContacts(contacts) {
    let ctrl = this;
    if(ctrl.isSelectedContacts) {
      contacts.forEach((contact) => {
        contact.isSelected = true;
      });
    } else {
      contacts.forEach((contact) => {
        contact.isSelected = false;
      });
    }
  }
}

export default HomeController;
