class Calculadora {
  constructor(display) {
    this.display = display;
    this.resetear();
  }

  resetear() {
    this.valorActual = '0';
    this.valorAnterior = null;
    this.operador = null;
    this.actualizarDisplay();
  }

  actualizarDisplay() {
    let valor = this.valorActual;
  
    if (!isNaN(valor)) {
      const numero = parseFloat(valor);
  
      // Limita a 10 cifras significativas si hay decimales
      valor = numero.toPrecision(10);
  
      // Si es muy largo, muestra en notación científica
      if (valor.length > 12) {
        valor = numero.toExponential(5);
      }
    }
  
    this.display.textContent = valor;
  }

  agregarNumero(num) {
    if (this.valorActual === '0' && num !== '.') {
      this.valorActual = num;
    } else {
      this.valorActual += num;
    }
    this.actualizarDisplay();
  }

  seleccionarOperacion(op) {
    if (this.operador !== null) {
      this.calcular();
    }
    this.operador = op;
    this.valorAnterior = this.valorActual;
    this.valorActual = '';
  }

  calcular() {
    const a = parseFloat(this.valorAnterior);
    const b = parseFloat(this.valorActual);
    if (isNaN(a) || isNaN(b)) return;

    switch (this.operador) {
      case 'add':
        this.valorActual = (a + b).toString();
        break;
      case 'subtract':
        this.valorActual = (a - b).toString();
        break;
      case 'multiply':
        this.valorActual = (a * b).toString();
        break;
      case 'divide':
        this.valorActual = b === 0 ? 'Error' : (a / b).toString();
        break;
    }

    this.operador = null;
    this.valorAnterior = null;
    this.actualizarDisplay();
  }

  cambiarSigno() {
    this.valorActual = (parseFloat(this.valorActual) * -1).toString();
    this.actualizarDisplay();
  }

  porcentaje() {
    this.valorActual = (parseFloat(this.valorActual) / 100).toString();
    this.actualizarDisplay();
  }

  clearEntry() {
    this.valorActual = '0';
    this.actualizarDisplay();
  }
  
  borrarUltimo() {
    this.valorActual = this.valorActual.length > 1
      ? this.valorActual.slice(0, -1)
      : '0';
    this.actualizarDisplay();
  }
  
  square() {
    this.valorActual = (parseFloat(this.valorActual) ** 2).toString();
    this.actualizarDisplay();
  }
  
  sqrt() {
    const val = parseFloat(this.valorActual);
    this.valorActual = val >= 0 ? Math.sqrt(val).toString() : 'Error';
    this.actualizarDisplay();
  }
  
  inverse() {
    const val = parseFloat(this.valorActual);
    this.valorActual = val !== 0 ? (1 / val).toString() : 'Error';
    this.actualizarDisplay();
  }
}

const display = document.getElementById('display');
const botones = document.querySelectorAll('.btn');
const calc = new Calculadora(display);

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const valor = boton.textContent;
    const accion = boton.dataset.accion;

    if (!accion) {
      calc.agregarNumero(valor);
    } else if (accion === 'clear') {
      calc.resetear();
    } else if (accion === 'sign') {
      calc.cambiarSigno();
    } else if (accion === 'percent') {
      calc.porcentaje();
    } else if (accion === 'equals') {
      calc.calcular();
    } else if (accion === 'ce') {
      calc.clearEntry();
    } else if (accion === 'backspace') {
      calc.borrarUltimo();
    } else if (accion === 'inverse') {
      calc.inverse();
    } else if (accion === 'square') {
      calc.square();
    } else if (accion === 'sqrt') {
      calc.sqrt();
    } else {
      calc.seleccionarOperacion(accion);
    }
  });
});


 // boton pagina de inicio te rediriga a la semana en la que estabas. 

 document.getElementById('volver').addEventListener('click', function (e) {
  e.preventDefault();
  const semana = localStorage.getItem('semanaActiva') || 0;
  window.location.href = `../index.html`;
});