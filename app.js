const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')     
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10

class Juego {
  constructor() {
      setTimeout(() => {
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
      }, 500)    
      
      inicializar() {
      btnEmpezar.classList.add('hide')
      this.nivel = 1
      this.colores = {
          celeste,
          violeta,
          naranja,
          verde
        }
     }
     
     generarSecuencia() {
      this.generarSecuencia = new Array(10).fill(0).map(n => Math.floor(Math.random( * 4)))
     }

     siguienteNivel() {
         this.iluminarSecuencia()
     }

     transformarNumeroAColor(color) {
        switch (color) {
        case 'Celeste':
         return 0
        case 'violeta':
         return 1
        case 'Naranja':
         return 2
        case 'Verde':
          return 4
        }
     }

     iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            let color = this.transformarNumeroAColor(this.secuencia[i])
            this.iluminarColor(color)
            setTimeout(() => IluminarColor(color), 1000 * i)
        }
     }

     iluminarColor(color) {
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
     }

     apagarColor(color) {
        this.colores[color].classList.remove('light')
     }
     
     agregarEventosClick() {
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
     }
    
     eliminarEvenosClick() {
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
     }
    
      elegirColor(ev){
            const nombreColor = ev.target.dataset.color
            const numeroColor = this.transformarNumeroAColor(nombreColor)
            this.iluminarColor(nombreColor)
            if (numeroColor === this.secuencia[this.subnivel]) {
              this.subnivel++
              if (this.subnivel === this.nivel) {
              this.nivel++
             this.eliminarEventosClick()
             if (this.nivel === (ULTIMO_NIVEL + 1)) {
                this.ganoEljuego()
            } else {
                setTimeOut(this.siguienteNivel, 1500)
            }
    
            }
            } else {
                this.perdioEljuego()
            }
        }
    
        ganoEljuego() {
            swal('Platzi', 'Felicitaciones, ganaste el juego!', 'success')
    
        }    

    }



       
      
} 
      
function empezarJuego() {
    window.juego = new Juego()
}


