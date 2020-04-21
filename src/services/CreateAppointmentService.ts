import { startOfHour } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentRepository';
import Appointment from '../models/Appointment';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentRepository;

  constructor(appointmentRepository: AppointmentRepository) {
    this.appointmentsRepository = appointmentRepository;
  }

  public excute({ date, provider }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findApppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findApppointmentInSameDate) {
      throw Error('This Appointment is already booked.');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
