class ContactMailer < ApplicationMailer

    def contact_email
        @contact = params[:contact_form]
        mail(to: @contact.mail,subject: @contact.subject)
    end

end
