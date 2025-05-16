class HoroscopeModel {
    constructor() {
        this.horoscopes = {
            aries: {
                sign: 'Aries',
                emoji: '♈',
                dates: '21 Mar - 19 Abr',
                prediction: 'Hoy es un día para tomar la iniciativa. Las oportunidades están a la vista, pero requieren acción.'
            },
            tauro: {
                sign: 'Tauro',
                emoji: '♉',
                dates: '20 Abr - 20 May',
                prediction: 'La paciencia es tu virtud hoy. No fuerces situaciones; todo llegará en el momento adecuado.'
            },
            geminis: {
                sign: 'Géminis',
                emoji: '♊',
                dates: '21 May - 20 Jun',
                prediction: 'Tu mente está especialmente aguda hoy. Es buen momento para aprender algo nuevo o comunicar tus ideas.'
            },
            cancer: {
                sign: 'Cáncer',
                emoji: '♋',
                dates: '21 Jun - 22 Jul',
                prediction: 'Escucha tu intuición hoy. Tus emociones pueden guiarte hacia decisiones importantes.'
            },
            leo: {
                sign: 'Leo',
                emoji: '♌',
                dates: '23 Jul - 22 Ago',
                prediction: 'Es tu momento para brillar. Tu energía atrae atención positiva; aprovecha para mostrar tus talentos.'
            },
            virgo: {
                sign: 'Virgo',
                emoji: '♍',
                dates: '23 Ago - 22 Sep',
                prediction: 'Un día para enfocarte en detalles. Tu meticulosidad te ayudará a resolver problemas complejos.'
            },
            libra: {
                sign: 'Libra',
                emoji: '♎',
                dates: '23 Sep - 22 Oct',
                prediction: 'El equilibrio es clave hoy. Busca armonía en tus relaciones y decisiones importantes.'
            },
            escorpio: {
                sign: 'Escorpio',
                emoji: '♏',
                dates: '23 Oct - 21 Nov',
                prediction: 'Tu intensidad puede sorprender a otros hoy. Usa tu poder de transformación sabiamente.'
            },
            sagitario: {
                sign: 'Sagitario',
                emoji: '♐',
                dates: '22 Nov - 21 Dic',
                prediction: 'La aventura te llama. Es un buen día para expandir tus horizontes, física o mentalmente.'
            },
            capricornio: {
                sign: 'Capricornio',
                emoji: '♑',
                dates: '22 Dic - 19 Ene',
                prediction: 'Tu disciplina dará frutos hoy. Mantén el enfoque en tus metas a largo plazo.'
            },
            acuario: {
                sign: 'Acuario',
                emoji: '♒',
                dates: '20 Ene - 18 Feb',
                prediction: 'Tus ideas innovadoras pueden sorprender hoy. Comparte tu visión única del mundo.'
            },
            piscis: {
                sign: 'Piscis',
                emoji: '♓',
                dates: '19 Feb - 20 Mar',
                prediction: 'Tu sensibilidad está en su punto máximo hoy. El arte y la creatividad pueden ser tu refugio.'
            }
        };
    }

    validateDate(dateString) {
        const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
        return regex.test(dateString);
    }

    getZodiacSign(day, month) {
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
        if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'tauro';
        if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'geminis';
        if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'cancer';
        if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
        if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
        if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'libra';
        if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'escorpio';
        if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'sagitario';
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricornio';
        if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'acuario';
        return 'piscis';
    }

    getHoroscope(dateString) {
        const [day, month, year] = dateString.split('-').map(Number);
        const sign = this.getZodiacSign(day, month);
        const horoscope = this.horoscopes[sign];
        
        return {
            sign: horoscope.sign,
            emoji: horoscope.emoji,
            message: `Hola, eres ${horoscope.sign} (${horoscope.dates}). ${horoscope.prediction}`
        };
    }
}