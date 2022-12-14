import React, { Component } from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
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
                text="Protecci??n de Datos de Car??cter Personal"
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
                text="Garant??a"
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
                text="Condiciones denerales de uso de la p??gina web"
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
      Las presentes condiciones generales regulan la compra a trav??s del sitio
      Web https://waldenbergInc.com (en lo sucesivo Waldenberg On-Line),
      accesible tambi??n desde la direcci??n https://waldenbergInc.com, por parte
      de los clientes de Supermercados Waldenberg (en adelante el ???Cliente???), y
      de las empresas del Grupo Waldenberg, de los productos ofrecidos a trav??s
      de ella. Estas condiciones generales de compra se complementan con las
      condiciones generales de acceso y uso a las p??ginas web de Waldenberg,
      recogidas en el Aviso Legal de https://waldenbergInc.com y reproducidas en
      el apartado noveno de las presentes. Todas las condiciones aqu?? recogidas
      deben ser consultadas por el cliente con car??cter previo al acceso a la
      p??gina web y/o a Waldenberg On-Line y se reputar??n aceptadas, con la mera
      utilizaci??n de los mismos. Los datos identificativos del responsable del
      supermercado son los que figuran a continuaci??n: Waldenberg S.A. N.I.F:
      A-33093097 Castiello 145 33690 Lugo de Llanera (Asturias)
      https://waldenbergInc.com Inscrita en el Registro Mercantil de Asturias,
      al tomo 714. Libro 483. Secci??n 3??. Folio 191. Hoja 2606. Inscripci??n 1??.
      Para realizar compras en Waldenberg On-Line ser?? necesario que el cliente
      acepte las presentes condiciones de compra. La realizaci??n de la compra
      implica el conocimiento y aceptaci??n plena de las presentes condiciones,
      en la versi??n publicada en el momento en que efect??e la misma.
    </p>
  </div>
);

const compromiso = (
  <div className="card-body">
    <p>
      Waldenberg On-Line est?? destinado a consumidores finales, entendiendo por
      tales, los as?? definidos en la Ley de Consumidores y Usuarios. El cliente
      declara ser mayor de edad, contratar en nombre propio y no tener limitada
      su capacidad de obrar o de comprometerse por el presente contrato. Se
      considera momento de realizaci??n de la compra el instante en el que el
      comprador ha seleccionado desde Waldenberg On-Line los productos que desea
      comprar, ha informado de las caracter??sticas generales de su pedido, y ha
      enviado esa informaci??n a Waldenberg, gener??ndose en ese momento un recibo
      de compra. Se considera momento de entrega el instante en el que el
      comprador, con las caracter??sticas inherentes a la modalidad de compra
      elegida, recibe f??sicamente los bienes descritos en el recibo de compra,
      seg??n los adquiri?? en el momento de realizaci??n de la compra, bajo las
      caracter??sticas y condiciones descritos en esta p??gina de informaci??n
      legal en dicho momento. La realizaci??n de una compra a trav??s de
      Waldenberg On-Line tendr?? car??cter de contrato de compra-venta, seg??n el
      cual el vendedor, Waldenberg, se obliga a vender, y el comprador a
      comprar, con las caracter??sticas y condiciones publicadas en esta p??gina
      de informaci??n legal en el momento de realizar la misma.
    </p>
  </div>
);

const proteccion = (
  <div className="card-body">
    <p>
      En cumplimiento de lo dispuesto en el Reglamento UE 2016/679, de 27 de
      abril, General de Protecci??n de Datos y la Ley Org??nica 3/2018, de 5 de
      diciembre, de Protecci??n de Datos y garant??a de los derechos
      digitales,Waldenberg, S.A.informa al cliente que los datos de car??cter
      personal que facilite al cumplimentar el formulario de registro existente
      en la p??gina web https://waldenbergInc.com as?? como los obtenidos como
      consecuencia de los pedidos que realice a trav??s de ella, ser??n
      incorporados a un sistema de tratamiento titularidad de la empresa en los
      t??rminos establecidos en los respectivos clausulados de protecci??n de
      datos. El cliente, al aceptar la "Pol??tica de Protecci??n de Datos"
      existente en el formulario de registro, autoriza expresamente a Waldenberg
      S.A. a utilizar sus datos en los t??rminos descritos. El cliente puede
      ejercitar gratuitamente los derechos de acceso, rectificaci??n, cancelaci??n
      y oposici??n sobre sus datos enviando comunicaci??n escrita a Waldenberg
      -address o al correo electr??nico lopd@Waldenberg.es.
    </p>
  </div>
);

const lugar = (
  <div className="card-body">
    <p>
      Desde Waldenberg On-Line hay tres modalidades de entrega de pedidos:
      entrega a domicilio, recogida en tienda y recogida Click&Collect Entrega a
      domicilio Esta opci??n permite entregar el pedido all?? donde el cliente nos
      indique, siempre y cuando el mismo est?? situado en un distrito postal
      dentro de la zona de reparto establecida vigente. En dicho caso el cliente
      podr?? escoger un horario de entrega, que se establecer?? por franjas
      horarias con intervalos determinados, y un d??a de entrega, comprendido
      entre las 18 horas a partir del momento en el que realice su pedido y los
      seis d??as siguientes al mismo. Los gastos de env??o de todos los pedidos
      con entrega a domicilio ser??n gratuitos a partir de 90 Euros. Los pedidos
      con entrega a domicilio de importe inferior a 90 Euros tendr??n un coste de
      env??o de 5 Euros. Nuevo Servicio: Recogida Click&Collect Este servicio
      est?? disponible en las tiendas de Molin??n y Roces en Gij??n, La Estrecha,
      Foncalada y Montecerrao en Oviedo, La Fresneda en Siero y La Magdalena en
      Avil??s ??C??mo funciona el servicio de recogida Click&Collect? 1- A??ade los
      productos de tu compra a tu Carrito 2- Confirma tu pedido 3- En el
      apartado ??D??nde quieres recibir tu pedido? Selecciona la casilla ???Nuevo
      Servicio: Recogida C&C??? 4- Elige la tienda donde quieres recoger tu compra
      del desplegable. 5- En el apartado ??Cu??ndo quieres recibir tu pedido?
      Selecciona el d??a y la hora a la que quieres recoger el pedido. 6-
      Completa el resto de los campos y continua los pasos para finalizar la
      compra 7- Recibir??s un e-mail de confirmaci??n del pedido con las
      instrucciones a seguir en tu tienda que son: Informaci??n de recogida: 1-
      Dir??gete a la zona de las taquillas situadas a la entrada de la tienda
      seleccionada en la franja horaria escogida. 2- Introduce el n??mero de
      referencia de tu pedido en la pantalla de las taquillas. 3- Sigue las
      instrucciones, te indicaremos las taquillas donde recoger tu compra. 4-
      Recuerda que puedes tener el pedido en distintas taquillas dependiendo de
      la temperatura de los productos para su adecuada conservaci??n. Con este
      nuevo servicio gratuito, podr??s recoger el pedido en las taquillas
      inteligentes en un m??nimo de 4 horas desde la realizaci??n del pedido. Las
      taquillas disponen de sistemas de refrigeraci??n que garantizan el perfecto
      estado de conservaci??n de los productos refrigerados y congelados de tu
      pedido. La relaci??n de tiendas de recogida Click&Collect vigentes en el
      momento de la compra se mostrar??n al cliente durante la realizaci??n de la
      misma, y podr??n ser comprobadas con car??cter previo en la ventana de
      informaci??n de zona de reparto. Los pedidos de recogida Click&Collect en
      tienda no tendr??n ning??n coste de env??o ni de preparaci??n Recogida en
      tienda Los clientes podr??n recoger el pedido en cualquiera de los
      supermercados afectos a este servicio, en dicho caso el cliente podr??
      escoger un horario de recogida, que se establecer?? por franjas horarias
      con intervalos determinados, y un d??a de recogida, comprendido entre las
      18 horas a partir del momento en el que haga el pedido y los tres d??as
      siguientes al mismo. El cliente podr?? pasar a recoger su pedido a partir
      del primer instante consignado en la franja horaria. La zona de reparto y
      relaci??n de tiendas de recogida vigentes en el momento de la compra se
      mostrar??n al cliente durante la realizaci??n de la misma, y podr??n ser
      comprobadas con car??cter previo en la ventana de informaci??n de zona de
      reparto. Cuando el pago se efect??e mediante tarjeta ( Visa, Visa Electr??n,
      4B, Euro6000, Maestro o Mastercard), se solicitar?? el DNI a quien recoja
      el pedido, que a su vez deber?? ser mayor de edad. El receptor firmar?? un
      albar??n de entrega indicando nombre, apellidos y D.N.I. Tanto para la
      recogida del pedido como para la entrega del mismo, se podr?? solicitar que
      est?? la persona que ha realizado el pedido, mostrando su DNI y tarjeta con
      la que se ha realizado el pago, para serle entregada la compra. Los
      pedidos de recogida en tienda no tendr??n ning??n coste de env??o ni de
      preparaci??n
    </p>
  </div>
);

const zonas = (
  <div className="card-body">
    <p>
      Una vez formalizado tu pedido, puedes elegir entre que te lo llevemos a
      casa, siempre y cuando est?? en la zona de reparto (debes consultar en la
      p??gina de Inicio si repartimos en el c??digo postal al que quieres enviar
      el pedido, introduciendo el mismo en el apartado "Visitar tienda") , o
      bien recogerlo enlos supermercados que te indicamos m??s abajo.
      Actualmente: ASTORGA AVIL??S Y CORVERA BENAVENTE BURGOS CANGAS DEL NARCEA
      CARRE??O Y GOZ??N CASTRILL??N CUENCA DEL NAL??N FOZ GIJON GRADO LE??N LLANERA
      LLANES MIERES MUROS DEL NAL??N OVIEDO POLA DE LENA PONFERRADA PRAVIA
      RIBADEO SALAS SAN ESTEBAN DE PRAVIA SIERO TAPIA DE CASARIEGO TORDESILLAS
      VALLADOLID VEGADEO VILLAVICIOSA ZAMORA Supermercados de Recogida en Tienda
      y Click&Collect: ASTORGA Garc??a Prieto 9,11,113 AVIL??S Y CORVERA Carretera
      de los Campos 3-5 (Corvera) Avenida Grandiella, 12 (Avil??s) *Click&Collect
      El Atrio (Avil??s) BENAVENTE Avda. El Ferial, 97 BURGOS Victoria178 CANGAS
      DEL NARCEA Ur??a 34-36 CARRE??O Y GOZ??N Isla del Carmen (Pg. La Vallina).
      Luanco CASTRILL??N El Camp??n, 38 (Salinas) CUENCA DEL NAL??N Avda. La Paz
      48-50 (El Entrego) Marino Guti??rrez,5 (La Felguera) Pelayo, 23 (Pola de
      Laviana) GIJ??N Benito Otero Mart??nez, 60 (Roces)*Click&Collect Luis Adaro
      Ruiz-Falc?? (Molin??n)*Click&Collect Avda. Pr??ncipe de Asturias (La Calzada)
      Calder??n de la Barca,s/n (ElCoto) Avda. Portugal 48-50 Puerto Espina, 3
      Daniel Palacio Fern??ndez (Viesques) Eleuterio Quintanilla 48 GRADO
      Carretera San Pelayo, 33 INFIESTO San Miguel S/N LLANES Carlos S??enz de
      Tejada 4 LE??N Baldomero Lozano, 14-16 Moises de Le??n Eq. Granados Avda
      Reyes Leoneses, 26 Avda. Nocedo MIERES Avda. M??jico, 24 Valeriano Miranda
      (Mayacina) OVIEDO La Riera 2 (La Estrecha)*Click&Collect Montecerrao
      *Click&Collect Juan Belmonte, 4 Comandante Caballero (Centro C??vico)
      Villafr??a 13-15 (Villafr??a) Luis Su??rez Ximielga (Colloto) Foncalada 15-17
      *Click&Collect Rosal 58 Teverga/(Campas) POLA DE LENA Robledo 22-24
      PONFERRADA Traves??a de Compostilla, 36 PRAVIA Santiago L??pez, 12 RIBADEO
      Avda. Galicia, 27 RIBADESELLA Los Porqueros, sector 1 SIERO Er??a del
      Hospital, 9. (Pola de Siero) Urb. La Fresneda Parc EC -1 (La Fresneda)
      Antonio Machado, 36 (Lugones) TORDESILLAS Avda Valladolid 3-5 VALLADOLID
      Laguna del Duero Gabilondo 24-26 VILLAVICIOSA Alejandro Casona, 11 ZAMORA
      Fray Toribio de Motolinia, 4 Costes de env??o El coste de env??o ser??
      gratuito para todos los pedidos realizados en nuestros supermercado
      on-line que superen los 90 ???. Para los pedidos online de importe inferior
      a 90 ??? el coste de env??o ser?? de 5 Euros. Los pedidos on-line de recogida
      en tienda y Click&Collect son siempre gratuitos
    </p>
  </div>
);

const gastos = (
  <div className="card-body">
    <p>
      Los gastos de env??o de todos los pedidos con entrega a domicilio ser??n
      gratuitos a partir de 90 Euros. Los pedidos con entrega a domicilio de
      importe inferior a 90 Euros tendr??n un coste de env??o de 5 Euros. Para
      pedidos de recogida en tienda no se aplicar?? ning??n coste extra. Si un
      mismo cliente realiza dos pedidos en un breve espacio de tiempo, con mismo
      lugar, d??a y hora de entrega, se le podr??n entregar juntos los pedidos,
      abon??ndosele los gastos de env??o del segundo pedido (si los hubiera). Los
      importes y condiciones particulares vigentes en el momento de la compra,
      le ser??n informados al cliente seg??n vaya realizando la compra, y podr??n
      ser consultados de forma previa en la p??gina de informaci??n de la zona de
      cobertura.
    </p>
  </div>
);

const importe = (
  <div className="card-body">
    <p>
      El importe de la compra vendr?? determinado por el coste de los productos
      adquiridos, m??s los gastos derivados del env??o o recogida seg??n el caso.
      Los precios aplicados a los productos ser??n los mismos que los del d??a en
      que el cliente efectu?? la compra, independientemente del car??cter del
      producto. Asimismo, los precios de los productos adquiridos a trav??s de
      Waldenberg On-Line y/o las promociones pueden no coincidir con los precios
      y/o promociones ofertados en la tienda Waldenberg desde la que se
      suministra el pedido, m??xime bajo la diferencia temporal existente entre
      la realizaci??n del pedido y la entrega o recogida del mismo. El coste
      total de los productos adquiridos una vez se ha preparado el pedido nunca
      podr?? superar al coste total de los productos que el cliente escoja en el
      momento de realizar la compra. Asimismo y sin perjuicio de lo anterior,
      los subtotales de los productos adquiridos por peso, podr??n ser
      ligeramente inferiores o superiores a los subtotales de los mismos cuando
      el cliente realiz?? la compra, no pudiendo exceder el l??mite superior en
      m??s de un 5%, ni el inferior en un 30%. Independientemente de la forma de
      compra empleada, en el momento de la recogida/recepci??n del pedido, se
      exigir?? la presentaci??n del DNI del titular de la tarjeta empleada para
      realizar el pago. En todos los precios e importes de Waldenberg On-Line
      est?? incluido el impuesto sobre el valor a??adido correspondiente.
    </p>
  </div>
);

const agotados = (
  <div className="card-body">
    <p>
      Si en el momento de la preparaci??n de su pedido alguno de los productos
      solicitados no lo tenemos disponible en nuestros almacenes, no constar?? en
      la factura y su importe le ser?? abonado al mismo medio de pago utilizado
      en la compra. Una vez realizado el pedido y abonado por el cliente -por
      medio de tarjeta de cr??dito o d??bito-, en todos aquellos pedidos en los
      que el sistema inform??tico reconoce una variaci??n de productos con
      respecto a los reflejados en el pedido (ya sea, entre otras
      circunstancias, por falta de disponibilidad de los mismos o por existir
      variaciones en los pesos de los productos frescos, etc???); es el propio
      sistema quien cancela ese producto del pedido y de manera inmediata
      realiza un abono por el importe del producto o productos cancelados a
      trav??s de la tarjeta de cr??dito o d??bito con la que el cliente realiz?? el
      pago.
    </p>
  </div>
);

const devoluciones = (
  <div className="card-body">
    <p>
      Debido a la pandemia del Coronavirus COVID-19 por razones hig??enicas y de
      salud no se aceptar??n devoluciones A tenor de lo dispuesto en el art. 45
      de la Ley 7/96, de 15 de enero de ordenaci??n del comercio minorista, el
      cliente no podr?? devolver el producto cuando el mismo sea perecedero si
      dicha devoluci??n no se produce en las 24 horas siguientes a la recepci??n
      del producto. Los productos no perecederos podr??n devolverse en el plazo
      de siete d??as siguientes contados desde la recepci??n del producto sin
      penalizaci??n ni gasto alguno. Sin perjuicio de lo anterior, las
      devoluciones de productos adquiridos a trav??s deAlimerka On-Liney
      repartidos a domicilio, podr??n ser devueltos en el momento de la recepci??n
      del pedido si se encontraran en mal estado o sus caracter??sticas no se
      correspondieran con las solicitadas por el cliente a la hora de efectuar
      su compra. (Si al realizar la devoluci??n de un producto, un pedido
      superior a 90??? quedara por debajo de esa cantidad y no se produjera
      ninguno de los dos motivos anteriormente citados, el cliente deber?? abonar
      los 5??? correspondientes a los gastos de env??o, no siendo necesaria su
      aportaci??n en caso contrario)
    </p>
  </div>
);

const destinamiento = (
  <div className="card-body">
    <p>
      Conforme a lo dispuesto en la legislaci??n vigente, el cliente dispone de
      un plazo m??nimo de catorce (14) d??as naturales, a contar desde la entrega,
      para ejercer el derecho de desistimiento. Para ello debe remitir una
      comunicaci??n escrita al Departamento de Atenci??n al Cliente de Waldenberg
      - Castiello 145 33690 Llanera (Asturias) o al correo
      atencion_al_cliente@Waldenberg.es, especificando los datos relativos a su
      persona as?? como al pedido del que desea desistir. En este caso, el
      cliente se har?? cargo del coste directo de la devoluci??n de los productos.
      No proceder?? el derecho de desistimiento antes se??alado en caso de
      adquisici??n de productos que, por su naturaleza, puedan deteriorarse o
      caducar con rapidez.
    </p>
  </div>
);

const garantia = (
  <div className="card-body">
    <p>
      En materia de garant??as y servicio postventa, Waldenberg, S.A., en su
      condici??n de vendedor, responder?? frente al cliente en los t??rminos
      previstos en el Real Decreto 1/2007, de 16 de Noviembre, por el que se
      aprueba el texto refundido de la Ley General para la Defensa de los
      Consumidores y Usuarios y otras leyes complementarias. Como dispone dicha
      norma, el consumidor y usuario tiene derecho a la reparaci??n del producto,
      a su sustituci??n, a la rebaja del precio o a la resoluci??n del contrato de
      conformidad con lo dispuesto en el citado texto legal. Si el producto no
      fuera conforme con el contrato, el consumidor y usuario podr?? optar entre
      exigir la reparaci??n o la sustituci??n del producto, salvo que una de estas
      dos opciones resulte objetivamente imposible o desproporcionada. Ser??n
      gratuitas para el consumidor y usuario. Si concluida la reparaci??n y
      entregado el producto, ??ste sigue siendo no conforme con el contrato, el
      consumidor y usuario podr?? exigir la sustituci??n del producto, salvo que
      esta opci??n resulte desproporcionada, la rebaja del precio o la resoluci??n
      del contrato en los t??rminos previstos en este cap??tulo. Del mismo modo,
      si la sustituci??n no lograra poner el producto en conformidad con el
      contrato, el consumidor y usuario podr?? exigir la reparaci??n del producto,
      salvo que esta opci??n resulte desproporcionada, la rebaja del precio o la
      resoluci??n del contrato en los t??rminos previstos en la norma. La rebaja
      del precio y la resoluci??n del contrato proceder??n a elecci??n del
      consumidor y usuario, cuando ??ste no pudiera exigir la reparaci??n o la
      sustituci??n y en los casos en los que ??stas no se hubieran llevado a cabo
      en plazo razonable o sin mayores inconvenientes para el consumidor y
      usuario. La resoluci??n no proceder?? cuando la falta de conformidad sea de
      escasa importancia. La rebaja del precio ser?? proporcional a la diferencia
      existente entre el valor que el producto hubiera tenido en el momento de
      la entrega de haber sido conforme con el contrato y el valor que el
      producto efectivamente entregado ten??a en el momento de dicha entrega. El
      consumidor y usuario deber?? informar al vendedor de la falta de
      conformidad en el plazo de dos meses desde que tuvo conocimiento de ella.
    </p>
  </div>
);

const quejas = (
  <div className="card-body">
    <p>
      El cliente podr?? interponer cualquier queja o reclamaci??n a trav??s de
      estos medios que ponemos a disposici??n: Con el departamento de Atenci??n al
      cliente en el tel??fono gratuito 900 100 126 En la direcci??n de correo
      electr??nico clientes@Waldenberg.es Por correo postal en la direcci??n C/
      Castiello 145, 33690 Lugo de Llanera. Adem??s, existen Hojas de
      Reclamaciones en todos los puntos de venta. Si tiene problemas con una
      compra en l??nea y no puede resolverlos con Waldenberg, S.A. , puede
      utilizar esta plataforma para enviar su reclamaci??n a un organismo de
      resoluci??n de litigios autorizado a trav??s del siguiente link:
      https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=ES
    </p>
  </div>
);

const seguridad = (
  <div className="card-body">
    <p>
      Para proteger sus datos personales y evitar el acceso o divulgaci??n no
      autorizados, la transmisi??n de determinada informaci??n confidencial, como
      n??mero de tarjeta de cr??dito, se hace mediante una conexi??n segura,
      encriptada y protegida (sistema de seguridad SSL), para proporcionar la
      m??xima seguridad. El cifrado Secure Sockets Layer (SSL) est?? dise??ado para
      impedir la lectura de informaci??n a personas ajenas a Waldenberg. Los
      n??meros de las tarjetas de cr??dito s??lo se utilizan para realizar los
      pagos y nunca con otros prop??sitos. Con este motivo hemos sido
      certificados por la sociedad Thawte cuyo objetivo es garantizar las
      medidas de seguridad en las transacciones que se produzcan en Internet.
      Para m??s informaci??n pulse aqu??. (http://www.thawte.com/)
    </p>
  </div>
);

const google = (
  <div className="card-body">
    <p>
      Nuestra p??gina web utiliza Google Analytics, un servicio anal??tico de web
      prestado por Google, Inc., una compa????a de Delaware cuya oficina principal
      est?? en 1600 Amphitheatre Parkway, Mountain View (California), CA 94043,
      Estados Unidos ("Google"). Google Analytics utiliza "cookies", que son
      archivos de texto ubicados en su ordenador, para ayudar al website a
      analizar el uso que hacen los usuarios del sitio web. La informaci??n que
      genera la cookie acerca de su uso del website (incluyendo su direcci??n IP)
      ser?? directamente transmitida y archivada por Google en los servidores de
      Estados Unidos. Google usar?? esta informaci??n por cuenta nuestra con el
      prop??sito de seguir la pista de su uso del website, recopilando informes
      de la actividad del website y prestando otros servicios relacionados con
      la actividad del website y el uso de Internet. Google podr?? transmitir
      dicha informaci??n a terceros cuando as?? se lo requiera la legislaci??n, o
      cuando dichos terceros procesen la informaci??n por cuenta de Google.
      Google no asociar?? su direcci??n IP con ning??n otro dato del que disponga
      Google. Puede Usted rechazar el tratamiento de los datos o la informaci??n
      rechazando el uso de cookies mediante la selecci??n de la configuraci??n
      apropiada de su navegador, sin embargo, debe Usted saber que si lo hace
      puede ser que no pueda usar la plena funcionalidad de este website. Al
      utilizar este website Usted consiente el tratamiento de informaci??n acerca
      de Usted por Google en la forma y para los fines arriba indicados.
    </p>
  </div>
);

const generales = (
  <div className="card-body">
    <p>
      Para cuantas cuestiones litigiosas se susciten sobre la interpretaci??n,
      aplicaci??n y/o cumplimiento de las condiciones generales de compra o las
      condiciones generales de acceso y uso a https://waldenbergInc.com, as??
      como de las reclamaciones que puedan derivarse, ser?? de aplicaci??n de la
      legislaci??n espa??ola
    </p>
  </div>
);
