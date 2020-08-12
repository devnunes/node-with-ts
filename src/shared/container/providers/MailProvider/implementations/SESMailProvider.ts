import nodemailer, { Transporter } from 'nodemailer/lib/ses-transport';
import { inject, injectable } from 'tsyringe';
import IMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider';
import IMailProvider from '../models/IMailProvider';
import ISendDTO from '../dtos/ISendMailDTO';

@injectable()
export default class SESMailProvider implements IMailProvider {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProvider,
  ) {}

  public async sendMail({
    from,
    to,
    subject,
    templateData,
  }: ISendDTO): Promise<void> {}
}
