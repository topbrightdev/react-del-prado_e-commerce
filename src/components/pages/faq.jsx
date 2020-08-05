import React, { Component } from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { withTranslate } from "react-redux-multilingual";
import Banner from "../elements/element-banner";

function NestedList(props) {
  const [open, setOpen] = React.useState(props.open);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader component="div" id="nested-list-subheader" />}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary={props.text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <div className="info-item">{props.form}</div>
        </List>
      </Collapse>
    </List>
  );
}
var openC = false;
var openG = false;
var openZ = false;

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    console.log(this.props);
    if (this.props.location.pathname) {
      var key = this.props.location.pathname;
      key = key.replace("/info/", "");
      console.log(key);
      if (key === "gastos") {
        openG = true;
        openC = false;
        openZ = false;
      }
      if (key === "time") {
        openG = false;
        openC = true;
        openZ = false;
      }
      if (key === "delivery") {
        openG = false;
        openC = false;
        openZ = true;
      }
    }
  }

  handleChange = (event) => {};

  clickHandler = () => {
    this.setState({ button: !this.state.button });
  };

  render() {
    const { translate } = this.props;
    return (
      <section className="faq-section section-b-space">
        <div className="container">
          <Banner />
          <div className="row">
            <div className="col-sm-12">
              <NestedList
                className="card-header"
                text="Condiciones Generales"
                form={condiciones}
                open={openC}
              />
              <NestedList
                className="card-header"
                text="Compromiso de compra-venta"
                form={compromiso}
                open={false}
              />

              <NestedList
                className="card-header"
                text="Protección de Datos de Carácter Personal"
                form={proteccion}
                open={false}
              />

              <NestedList
                className="card-header"
                text="Lugar de entrega"
                form={lugar}
                open={false}
              />
              <NestedList
                className="card-header"
                text="Zonas de reparto"
                form={zonas}
                open={openZ}
              />
              <NestedList
                className="card-header"
                text="Gastos de entrega"
                form={gastos}
                open={openG}
              />

              <NestedList
                className="card-header"
                text="Importe de la compra"
                form={importe}
                open={false}
              />
              <NestedList
                className="card-header"
                text="Productos agotados"
                form={agotados}
                open={false}
              />
              <NestedList
                className="card-header"
                text="Devoluciones de productos"
                form={devoluciones}
                open={false}
              />
              <NestedList
                className="card-header"
                text="Desistimiento"
                form={destinamiento}
                open={false}
              />
              <NestedList
                className="card-header"
                text="Garantía"
                form={garantia}
                open={false}
              />
              <NestedList
                className="card-header"
                text="Quejas y reclamaciones"
                form={quejas}
                open={false}
              />
              <NestedList
                className="card-header"
                text="Seguridad en las transacciones"
                form={seguridad}
                open={false}
              />
              <NestedList
                className="card-header"
                text="Condiciones denerales de uso de la página web"
                form={condiciones}
                open={false}
              />
              <NestedList
                className="card-header"
                text="Google Analytics"
                form={google}
                open={false}
              />
              <NestedList
                className="card-header"
                text="Generales"
                form={generales}
                open={false}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  scrollToMyRef = () => window.scrollTo(0, this.myRef.offsetTop);
}

const condiciones = (
  <div className="card-body">
    <p>
      Las presentes condiciones generales regulan la compra a través del sitio
      Web https://waldenbergInc.com (en lo sucesivo Waldenberg On-Line),
      accesible también desde la dirección https://waldenbergInc.com, por parte
      de los clientes de Supermercados Waldenberg (en adelante el “Cliente”), y
      de las empresas del Grupo Waldenberg, de los productos ofrecidos a través
      de ella. Estas condiciones generales de compra se complementan con las
      condiciones generales de acceso y uso a las páginas web de Waldenberg,
      recogidas en el Aviso Legal de https://waldenbergInc.com y reproducidas en
      el apartado noveno de las presentes. Todas las condiciones aquí recogidas
      deben ser consultadas por el cliente con carácter previo al acceso a la
      página web y/o a Waldenberg On-Line y se reputarán aceptadas, con la mera
      utilización de los mismos. Los datos identificativos del responsable del
      supermercado son los que figuran a continuación: Waldenberg S.A. N.I.F:
      A-33093097 Castiello 145 33690 Lugo de Llanera (Asturias)
      https://waldenbergInc.com Inscrita en el Registro Mercantil de Asturias,
      al tomo 714. Libro 483. Sección 3ª. Folio 191. Hoja 2606. Inscripción 1ª.
      Para realizar compras en Waldenberg On-Line será necesario que el cliente
      acepte las presentes condiciones de compra. La realización de la compra
      implica el conocimiento y aceptación plena de las presentes condiciones,
      en la versión publicada en el momento en que efectúe la misma.
    </p>
  </div>
);

const compromiso = (
  <div className="card-body">
    <p>
      Waldenberg On-Line está destinado a consumidores finales, entendiendo por
      tales, los así definidos en la Ley de Consumidores y Usuarios. El cliente
      declara ser mayor de edad, contratar en nombre propio y no tener limitada
      su capacidad de obrar o de comprometerse por el presente contrato. Se
      considera momento de realización de la compra el instante en el que el
      comprador ha seleccionado desde Waldenberg On-Line los productos que desea
      comprar, ha informado de las características generales de su pedido, y ha
      enviado esa información a Waldenberg, generándose en ese momento un recibo
      de compra. Se considera momento de entrega el instante en el que el
      comprador, con las características inherentes a la modalidad de compra
      elegida, recibe físicamente los bienes descritos en el recibo de compra,
      según los adquirió en el momento de realización de la compra, bajo las
      características y condiciones descritos en esta página de información
      legal en dicho momento. La realización de una compra a través de
      Waldenberg On-Line tendrá carácter de contrato de compra-venta, según el
      cual el vendedor, Waldenberg, se obliga a vender, y el comprador a
      comprar, con las características y condiciones publicadas en esta página
      de información legal en el momento de realizar la misma.
    </p>
  </div>
);

const proteccion = (
  <div className="card-body">
    <p>
      En cumplimiento de lo dispuesto en el Reglamento UE 2016/679, de 27 de
      abril, General de Protección de Datos y la Ley Orgánica 3/2018, de 5 de
      diciembre, de Protección de Datos y garantía de los derechos
      digitales,Waldenberg, S.A.informa al cliente que los datos de carácter
      personal que facilite al cumplimentar el formulario de registro existente
      en la página web https://waldenbergInc.com así como los obtenidos como
      consecuencia de los pedidos que realice a través de ella, serán
      incorporados a un sistema de tratamiento titularidad de la empresa en los
      términos establecidos en los respectivos clausulados de protección de
      datos. El cliente, al aceptar la "Política de Protección de Datos"
      existente en el formulario de registro, autoriza expresamente a Waldenberg
      S.A. a utilizar sus datos en los términos descritos. El cliente puede
      ejercitar gratuitamente los derechos de acceso, rectificación, cancelación
      y oposición sobre sus datos enviando comunicación escrita a Waldenberg
      -address o al correo electrónico lopd@Waldenberg.es.
    </p>
  </div>
);

const lugar = (
  <div className="card-body">
    <p>
      Desde Waldenberg On-Line hay tres modalidades de entrega de pedidos:
      entrega a domicilio, recogida en tienda y recogida Click&Collect Entrega a
      domicilio Esta opción permite entregar el pedido allí donde el cliente nos
      indique, siempre y cuando el mismo esté situado en un distrito postal
      dentro de la zona de reparto establecida vigente. En dicho caso el cliente
      podrá escoger un horario de entrega, que se establecerá por franjas
      horarias con intervalos determinados, y un día de entrega, comprendido
      entre las 18 horas a partir del momento en el que realice su pedido y los
      seis días siguientes al mismo. Los gastos de envío de todos los pedidos
      con entrega a domicilio serán gratuitos a partir de 90 Euros. Los pedidos
      con entrega a domicilio de importe inferior a 90 Euros tendrán un coste de
      envío de 5 Euros. Nuevo Servicio: Recogida Click&Collect Este servicio
      está disponible en las tiendas de Molinón y Roces en Gijón, La Estrecha,
      Foncalada y Montecerrao en Oviedo, La Fresneda en Siero y La Magdalena en
      Avilés ¿Cómo funciona el servicio de recogida Click&Collect? 1- Añade los
      productos de tu compra a tu Carrito 2- Confirma tu pedido 3- En el
      apartado ¿Dónde quieres recibir tu pedido? Selecciona la casilla “Nuevo
      Servicio: Recogida C&C” 4- Elige la tienda donde quieres recoger tu compra
      del desplegable. 5- En el apartado ¿Cuándo quieres recibir tu pedido?
      Selecciona el día y la hora a la que quieres recoger el pedido. 6-
      Completa el resto de los campos y continua los pasos para finalizar la
      compra 7- Recibirás un e-mail de confirmación del pedido con las
      instrucciones a seguir en tu tienda que son: Información de recogida: 1-
      Dirígete a la zona de las taquillas situadas a la entrada de la tienda
      seleccionada en la franja horaria escogida. 2- Introduce el número de
      referencia de tu pedido en la pantalla de las taquillas. 3- Sigue las
      instrucciones, te indicaremos las taquillas donde recoger tu compra. 4-
      Recuerda que puedes tener el pedido en distintas taquillas dependiendo de
      la temperatura de los productos para su adecuada conservación. Con este
      nuevo servicio gratuito, podrás recoger el pedido en las taquillas
      inteligentes en un mínimo de 4 horas desde la realización del pedido. Las
      taquillas disponen de sistemas de refrigeración que garantizan el perfecto
      estado de conservación de los productos refrigerados y congelados de tu
      pedido. La relación de tiendas de recogida Click&Collect vigentes en el
      momento de la compra se mostrarán al cliente durante la realización de la
      misma, y podrán ser comprobadas con carácter previo en la ventana de
      información de zona de reparto. Los pedidos de recogida Click&Collect en
      tienda no tendrán ningún coste de envío ni de preparación Recogida en
      tienda Los clientes podrán recoger el pedido en cualquiera de los
      supermercados afectos a este servicio, en dicho caso el cliente podrá
      escoger un horario de recogida, que se establecerá por franjas horarias
      con intervalos determinados, y un día de recogida, comprendido entre las
      18 horas a partir del momento en el que haga el pedido y los tres días
      siguientes al mismo. El cliente podrá pasar a recoger su pedido a partir
      del primer instante consignado en la franja horaria. La zona de reparto y
      relación de tiendas de recogida vigentes en el momento de la compra se
      mostrarán al cliente durante la realización de la misma, y podrán ser
      comprobadas con carácter previo en la ventana de información de zona de
      reparto. Cuando el pago se efectúe mediante tarjeta ( Visa, Visa Electrón,
      4B, Euro6000, Maestro o Mastercard), se solicitará el DNI a quien recoja
      el pedido, que a su vez deberá ser mayor de edad. El receptor firmará un
      albarán de entrega indicando nombre, apellidos y D.N.I. Tanto para la
      recogida del pedido como para la entrega del mismo, se podrá solicitar que
      esté la persona que ha realizado el pedido, mostrando su DNI y tarjeta con
      la que se ha realizado el pago, para serle entregada la compra. Los
      pedidos de recogida en tienda no tendrán ningún coste de envío ni de
      preparación
    </p>
  </div>
);

const zonas = (
  <div className="card-body">
    <p>
      Una vez formalizado tu pedido, puedes elegir entre que te lo llevemos a
      casa, siempre y cuando esté en la zona de reparto (debes consultar en la
      página de Inicio si repartimos en el código postal al que quieres enviar
      el pedido, introduciendo el mismo en el apartado "Visitar tienda") , o
      bien recogerlo enlos supermercados que te indicamos más abajo.
      Actualmente: ASTORGA AVILÉS Y CORVERA BENAVENTE BURGOS CANGAS DEL NARCEA
      CARREÑO Y GOZÓN CASTRILLÓN CUENCA DEL NALÓN FOZ GIJON GRADO LEÓN LLANERA
      LLANES MIERES MUROS DEL NALÓN OVIEDO POLA DE LENA PONFERRADA PRAVIA
      RIBADEO SALAS SAN ESTEBAN DE PRAVIA SIERO TAPIA DE CASARIEGO TORDESILLAS
      VALLADOLID VEGADEO VILLAVICIOSA ZAMORA Supermercados de Recogida en Tienda
      y Click&Collect: ASTORGA García Prieto 9,11,113 AVILÉS Y CORVERA Carretera
      de los Campos 3-5 (Corvera) Avenida Grandiella, 12 (Avilés) *Click&Collect
      El Atrio (Avilés) BENAVENTE Avda. El Ferial, 97 BURGOS Victoria178 CANGAS
      DEL NARCEA Uría 34-36 CARREÑO Y GOZÓN Isla del Carmen (Pg. La Vallina).
      Luanco CASTRILLÓN El Campón, 38 (Salinas) CUENCA DEL NALÓN Avda. La Paz
      48-50 (El Entrego) Marino Gutiérrez,5 (La Felguera) Pelayo, 23 (Pola de
      Laviana) GIJÓN Benito Otero Martínez, 60 (Roces)*Click&Collect Luis Adaro
      Ruiz-Falcó (Molinón)*Click&Collect Avda. Príncipe de Asturias (La Calzada)
      Calderón de la Barca,s/n (ElCoto) Avda. Portugal 48-50 Puerto Espina, 3
      Daniel Palacio Fernández (Viesques) Eleuterio Quintanilla 48 GRADO
      Carretera San Pelayo, 33 INFIESTO San Miguel S/N LLANES Carlos Sáenz de
      Tejada 4 LEÓN Baldomero Lozano, 14-16 Moises de León Eq. Granados Avda
      Reyes Leoneses, 26 Avda. Nocedo MIERES Avda. Méjico, 24 Valeriano Miranda
      (Mayacina) OVIEDO La Riera 2 (La Estrecha)*Click&Collect Montecerrao
      *Click&Collect Juan Belmonte, 4 Comandante Caballero (Centro Cívico)
      Villafría 13-15 (Villafría) Luis Suárez Ximielga (Colloto) Foncalada 15-17
      *Click&Collect Rosal 58 Teverga/(Campas) POLA DE LENA Robledo 22-24
      PONFERRADA Travesía de Compostilla, 36 PRAVIA Santiago López, 12 RIBADEO
      Avda. Galicia, 27 RIBADESELLA Los Porqueros, sector 1 SIERO Ería del
      Hospital, 9. (Pola de Siero) Urb. La Fresneda Parc EC -1 (La Fresneda)
      Antonio Machado, 36 (Lugones) TORDESILLAS Avda Valladolid 3-5 VALLADOLID
      Laguna del Duero Gabilondo 24-26 VILLAVICIOSA Alejandro Casona, 11 ZAMORA
      Fray Toribio de Motolinia, 4 Costes de envío El coste de envío será
      gratuito para todos los pedidos realizados en nuestros supermercado
      on-line que superen los 90 €. Para los pedidos online de importe inferior
      a 90 € el coste de envío será de 5 Euros. Los pedidos on-line de recogida
      en tienda y Click&Collect son siempre gratuitos
    </p>
  </div>
);

const gastos = (
  <div className="card-body">
    <p>
      Los gastos de envío de todos los pedidos con entrega a domicilio serán
      gratuitos a partir de 90 Euros. Los pedidos con entrega a domicilio de
      importe inferior a 90 Euros tendrán un coste de envío de 5 Euros. Para
      pedidos de recogida en tienda no se aplicará ningún coste extra. Si un
      mismo cliente realiza dos pedidos en un breve espacio de tiempo, con mismo
      lugar, día y hora de entrega, se le podrán entregar juntos los pedidos,
      abonándosele los gastos de envío del segundo pedido (si los hubiera). Los
      importes y condiciones particulares vigentes en el momento de la compra,
      le serán informados al cliente según vaya realizando la compra, y podrán
      ser consultados de forma previa en la página de información de la zona de
      cobertura.
    </p>
  </div>
);

const importe = (
  <div className="card-body">
    <p>
      El importe de la compra vendrá determinado por el coste de los productos
      adquiridos, más los gastos derivados del envío o recogida según el caso.
      Los precios aplicados a los productos serán los mismos que los del día en
      que el cliente efectuó la compra, independientemente del carácter del
      producto. Asimismo, los precios de los productos adquiridos a través de
      Waldenberg On-Line y/o las promociones pueden no coincidir con los precios
      y/o promociones ofertados en la tienda Waldenberg desde la que se
      suministra el pedido, máxime bajo la diferencia temporal existente entre
      la realización del pedido y la entrega o recogida del mismo. El coste
      total de los productos adquiridos una vez se ha preparado el pedido nunca
      podrá superar al coste total de los productos que el cliente escoja en el
      momento de realizar la compra. Asimismo y sin perjuicio de lo anterior,
      los subtotales de los productos adquiridos por peso, podrán ser
      ligeramente inferiores o superiores a los subtotales de los mismos cuando
      el cliente realizó la compra, no pudiendo exceder el límite superior en
      más de un 5%, ni el inferior en un 30%. Independientemente de la forma de
      compra empleada, en el momento de la recogida/recepción del pedido, se
      exigirá la presentación del DNI del titular de la tarjeta empleada para
      realizar el pago. En todos los precios e importes de Waldenberg On-Line
      está incluido el impuesto sobre el valor añadido correspondiente.
    </p>
  </div>
);

const agotados = (
  <div className="card-body">
    <p>
      Si en el momento de la preparación de su pedido alguno de los productos
      solicitados no lo tenemos disponible en nuestros almacenes, no constará en
      la factura y su importe le será abonado al mismo medio de pago utilizado
      en la compra. Una vez realizado el pedido y abonado por el cliente -por
      medio de tarjeta de crédito o débito-, en todos aquellos pedidos en los
      que el sistema informático reconoce una variación de productos con
      respecto a los reflejados en el pedido (ya sea, entre otras
      circunstancias, por falta de disponibilidad de los mismos o por existir
      variaciones en los pesos de los productos frescos, etc…); es el propio
      sistema quien cancela ese producto del pedido y de manera inmediata
      realiza un abono por el importe del producto o productos cancelados a
      través de la tarjeta de crédito o débito con la que el cliente realizó el
      pago.
    </p>
  </div>
);

const devoluciones = (
  <div className="card-body">
    <p>
      Debido a la pandemia del Coronavirus COVID-19 por razones higíenicas y de
      salud no se aceptarán devoluciones A tenor de lo dispuesto en el art. 45
      de la Ley 7/96, de 15 de enero de ordenación del comercio minorista, el
      cliente no podrá devolver el producto cuando el mismo sea perecedero si
      dicha devolución no se produce en las 24 horas siguientes a la recepción
      del producto. Los productos no perecederos podrán devolverse en el plazo
      de siete días siguientes contados desde la recepción del producto sin
      penalización ni gasto alguno. Sin perjuicio de lo anterior, las
      devoluciones de productos adquiridos a través deAlimerka On-Liney
      repartidos a domicilio, podrán ser devueltos en el momento de la recepción
      del pedido si se encontraran en mal estado o sus características no se
      correspondieran con las solicitadas por el cliente a la hora de efectuar
      su compra. (Si al realizar la devolución de un producto, un pedido
      superior a 90€ quedara por debajo de esa cantidad y no se produjera
      ninguno de los dos motivos anteriormente citados, el cliente deberá abonar
      los 5€ correspondientes a los gastos de envío, no siendo necesaria su
      aportación en caso contrario)
    </p>
  </div>
);

const destinamiento = (
  <div className="card-body">
    <p>
      Conforme a lo dispuesto en la legislación vigente, el cliente dispone de
      un plazo mínimo de catorce (14) días naturales, a contar desde la entrega,
      para ejercer el derecho de desistimiento. Para ello debe remitir una
      comunicación escrita al Departamento de Atención al Cliente de Waldenberg
      - Castiello 145 33690 Llanera (Asturias) o al correo
      atencion_al_cliente@Waldenberg.es, especificando los datos relativos a su
      persona así como al pedido del que desea desistir. En este caso, el
      cliente se hará cargo del coste directo de la devolución de los productos.
      No procederá el derecho de desistimiento antes señalado en caso de
      adquisición de productos que, por su naturaleza, puedan deteriorarse o
      caducar con rapidez.
    </p>
  </div>
);

const garantia = (
  <div className="card-body">
    <p>
      En materia de garantías y servicio postventa, Waldenberg, S.A., en su
      condición de vendedor, responderá frente al cliente en los términos
      previstos en el Real Decreto 1/2007, de 16 de Noviembre, por el que se
      aprueba el texto refundido de la Ley General para la Defensa de los
      Consumidores y Usuarios y otras leyes complementarias. Como dispone dicha
      norma, el consumidor y usuario tiene derecho a la reparación del producto,
      a su sustitución, a la rebaja del precio o a la resolución del contrato de
      conformidad con lo dispuesto en el citado texto legal. Si el producto no
      fuera conforme con el contrato, el consumidor y usuario podrá optar entre
      exigir la reparación o la sustitución del producto, salvo que una de estas
      dos opciones resulte objetivamente imposible o desproporcionada. Serán
      gratuitas para el consumidor y usuario. Si concluida la reparación y
      entregado el producto, éste sigue siendo no conforme con el contrato, el
      consumidor y usuario podrá exigir la sustitución del producto, salvo que
      esta opción resulte desproporcionada, la rebaja del precio o la resolución
      del contrato en los términos previstos en este capítulo. Del mismo modo,
      si la sustitución no lograra poner el producto en conformidad con el
      contrato, el consumidor y usuario podrá exigir la reparación del producto,
      salvo que esta opción resulte desproporcionada, la rebaja del precio o la
      resolución del contrato en los términos previstos en la norma. La rebaja
      del precio y la resolución del contrato procederán a elección del
      consumidor y usuario, cuando éste no pudiera exigir la reparación o la
      sustitución y en los casos en los que éstas no se hubieran llevado a cabo
      en plazo razonable o sin mayores inconvenientes para el consumidor y
      usuario. La resolución no procederá cuando la falta de conformidad sea de
      escasa importancia. La rebaja del precio será proporcional a la diferencia
      existente entre el valor que el producto hubiera tenido en el momento de
      la entrega de haber sido conforme con el contrato y el valor que el
      producto efectivamente entregado tenía en el momento de dicha entrega. El
      consumidor y usuario deberá informar al vendedor de la falta de
      conformidad en el plazo de dos meses desde que tuvo conocimiento de ella.
    </p>
  </div>
);

const quejas = (
  <div className="card-body">
    <p>
      El cliente podrá interponer cualquier queja o reclamación a través de
      estos medios que ponemos a disposición: Con el departamento de Atención al
      cliente en el teléfono gratuito 900 100 126 En la dirección de correo
      electrónico clientes@Waldenberg.es Por correo postal en la dirección C/
      Castiello 145, 33690 Lugo de Llanera. Además, existen Hojas de
      Reclamaciones en todos los puntos de venta. Si tiene problemas con una
      compra en línea y no puede resolverlos con Waldenberg, S.A. , puede
      utilizar esta plataforma para enviar su reclamación a un organismo de
      resolución de litigios autorizado a través del siguiente link:
      https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=ES
    </p>
  </div>
);

const seguridad = (
  <div className="card-body">
    <p>
      Para proteger sus datos personales y evitar el acceso o divulgación no
      autorizados, la transmisión de determinada información confidencial, como
      número de tarjeta de crédito, se hace mediante una conexión segura,
      encriptada y protegida (sistema de seguridad SSL), para proporcionar la
      máxima seguridad. El cifrado Secure Sockets Layer (SSL) está diseñado para
      impedir la lectura de información a personas ajenas a Waldenberg. Los
      números de las tarjetas de crédito sólo se utilizan para realizar los
      pagos y nunca con otros propósitos. Con este motivo hemos sido
      certificados por la sociedad Thawte cuyo objetivo es garantizar las
      medidas de seguridad en las transacciones que se produzcan en Internet.
      Para más información pulse aquí. (http://www.thawte.com/)
    </p>
  </div>
);

const google = (
  <div className="card-body">
    <p>
      Nuestra página web utiliza Google Analytics, un servicio analítico de web
      prestado por Google, Inc., una compañía de Delaware cuya oficina principal
      está en 1600 Amphitheatre Parkway, Mountain View (California), CA 94043,
      Estados Unidos ("Google"). Google Analytics utiliza "cookies", que son
      archivos de texto ubicados en su ordenador, para ayudar al website a
      analizar el uso que hacen los usuarios del sitio web. La información que
      genera la cookie acerca de su uso del website (incluyendo su dirección IP)
      será directamente transmitida y archivada por Google en los servidores de
      Estados Unidos. Google usará esta información por cuenta nuestra con el
      propósito de seguir la pista de su uso del website, recopilando informes
      de la actividad del website y prestando otros servicios relacionados con
      la actividad del website y el uso de Internet. Google podrá transmitir
      dicha información a terceros cuando así se lo requiera la legislación, o
      cuando dichos terceros procesen la información por cuenta de Google.
      Google no asociará su dirección IP con ningún otro dato del que disponga
      Google. Puede Usted rechazar el tratamiento de los datos o la información
      rechazando el uso de cookies mediante la selección de la configuración
      apropiada de su navegador, sin embargo, debe Usted saber que si lo hace
      puede ser que no pueda usar la plena funcionalidad de este website. Al
      utilizar este website Usted consiente el tratamiento de información acerca
      de Usted por Google en la forma y para los fines arriba indicados.
    </p>
  </div>
);

const generales = (
  <div className="card-body">
    <p>
      Para cuantas cuestiones litigiosas se susciten sobre la interpretación,
      aplicación y/o cumplimiento de las condiciones generales de compra o las
      condiciones generales de acceso y uso a https://waldenbergInc.com, así
      como de las reclamaciones que puedan derivarse, será de aplicación de la
      legislación española
    </p>
  </div>
);
