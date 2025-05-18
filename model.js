class HoroscopeModel {
    constructor() {
      this.signs = {
        aries: {
          emoji: '♈',
          message: 'Aries (21 Mar - 19 Abr): Hoy es día de acción. Las oportunidades están frente a ti.'
        },
        tauro: {
          emoji: '♉',
          message: 'Tauro (20 Abr - 20 May): La paciencia será tu mejor aliada hoy.'
        },
        geminis: {
          emoji: '♊',
          message: 'Géminis (21 May - 20 Jun): Tu mente está especialmente aguda. Buen día para aprender.'
        },
        cancer: {
          emoji: '♋',
          message: 'Cáncer (21 Jun - 22 Jul): Confía en tu intuición para tomar decisiones.'
        },
        leo: {
          emoji: '♌',
          message: 'Leo (23 Jul - 22 Ago): Es tu momento para brillar y mostrar tus talentos.'
        },
        virgo: {
          emoji: '♍',
          message: 'Virgo (23 Ago - 22 Sep): Enfócate en los detalles importantes hoy.'
        },
        libra: {
          emoji: '♎',
          message: 'Libra (23 Sep - 22 Oct): Busca el equilibrio en todas tus relaciones.'
        },
        escorpio: {
          emoji: '♏',
          message: 'Escorpio (23 Oct - 21 Nov): Usa tu poder de transformación sabiamente.'
        },
        sagitario: {
          emoji: '♐',
          message: 'Sagitario (22 Nov - 21 Dic): La aventura te llama. Explora nuevas ideas.'
        },
        capricornio: {
          emoji: '♑',
          message: 'Capricornio (22 Dic - 19 Ene): Tu disciplina dará frutos importantes.'
        },
        acuario: {
          emoji: '♒',
          message: 'Acuario (20 Ene - 18 Feb): Tus ideas innovadoras sorprenderán a todos.'
        },
        piscis: {
          emoji: '♓',
          message: 'Piscis (19 Feb - 20 Mar): Tu creatividad está en su punto más alto.'
        }
      };
    }
  
    validateDate(date) {
      // Validación básica de formato DD-MM-AAAA
      const regex = /^\d{2}-\d{2}-\d{4}$/;
      return regex.test(date);
    }
  
    getSign(day, month) {
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
  
    getHoroscope(dateStr) {
      if (!this.validateDate(dateStr)) {
        return { error: 'Formato de fecha inválido. Use DD-MM-AAAA' };
      }
  
      const [day, month] = dateStr.split('-').map(Number);
      const sign = this.getSign(day, month);
      
      return {
        emoji: this.signs[sign].emoji,
        message: this.signs[sign].message,
        sign: sign
      };
    }
  }