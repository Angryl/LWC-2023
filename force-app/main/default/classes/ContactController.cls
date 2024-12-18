/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 12-18-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsBornAfter(Date birthDate) {
        return [
            SELECT Name, Title, Email, Phone
            FROM Contact
            WHERE Birthdate > :birthDate
            WITH SECURITY_ENFORCED
       ];
    }
}