"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (c, w, d) {
  alert("Hola Mundo");
  c("hola otra vez");
  var Persona = /*#__PURE__*/function () {
    function Persona(nombre, edad, cedula, mascota) {
      _classCallCheck(this, Persona);
      this.nombre = nombre;
      this.edad = edad;
      this.cedula = cedula;
      this.mascota = mascota;
      this.bdPersona = [];
    }
    _createClass(Persona, [{
      key: "agregarPersona",
      value: function agregarPersona() {
        var persona = {
          nombre: this.nombre,
          edad: this.edad,
          cedula: this.cedula,
          mascota: this.mascota
        };
        this.bdPersona.push(persona);
      }
    }, {
      key: "mostrarPersonas",
      value: function mostrarPersonas() {
        c(this.bdPersona);
      }
    }]);
    return Persona;
  }();
  var persona = new Persona("Juan", 25, 1021364, "Pepa");
  var persona2 = new Persona("Sonia", 52, 45555, "Pepa");
  persona.agregarPersona();
  persona2.agregarPersona();
  persona.mostrarPersonas();
  persona2.mostrarPersonas();
})(console.log, window, document);