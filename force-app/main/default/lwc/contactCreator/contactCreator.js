import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import FIRST_NAME from '@salesforce/schema/contact.FirstName';
import LAST_NAME from '@salesforce/schema/contact.LastName';
import EMAIL from '@salesforce/schema/contact.Email';
import CONTACT_OBJECT from '@salesforce/schema/contact';
export default class ContactCreator extends LightningElement {

    objectApiName = CONTACT_OBJECT;
    fields = [FIRST_NAME,LAST_NAME,EMAIL];
    
    handleSuccess(event){
        const showToast = new ShowToastEvent({
            title :'contact Created',
            message:  "Record ID: " + event.detail.id,
            variant: 'success',
            mode:'dismissable'
        });
        this.dispatchEvent(showToast);
    }
}