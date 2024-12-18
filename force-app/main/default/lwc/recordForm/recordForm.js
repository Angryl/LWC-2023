import { LightningElement, api } from 'lwc';
import {ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import BAddress_FIELD from '@salesforce/schema/Account.BillingAddress';
import AccountNUMBER_FIELD from '@salesforce/schema/Account.AccountNumber';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class RecordForm extends LightningElement {
 
    // Expose a field to make it available in the template
    fields = [NAME_FIELD,BAddress_FIELD,AccountNUMBER_FIELD,WEBSITE_FIELD];

    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName;

    handleSuccess(event){
        const toast = new ShowToastEvent({
            title: 'Account Modifies',
            message:' Account modifes successfully',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(toast);
    }

    handleError(event){
        const toast1 = new ShowToastEvent({
            title: 'Error',
            message:' Error occured while saving the account',
            variant: 'error',
            mode: 'dismissable'
        });
    }
}