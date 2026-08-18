import fs from 'node:fs/promises';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';

const out='/Users/user/projects/projects/Web/web.gruporincon.com/outputs/019ff790-5100-7c10-aaa2-4602911ca668';
const wb=Workbook.create();
const q=wb.worksheets.add('Cotización');
const logic=wb.worksheets.add('Lógica aprobable');
const ass=wb.worksheets.add('Supuestos y exclusiones');
for (const s of [q,logic,ass]) s.showGridLines=false;
const navy='#0B2A4A', blue='#1769AA', pale='#EAF2F8', green='#DFF2E1', amber='#FFF0CC', gray='#667085', line='#D0D5DD';
q.mergeCells('A1:F2'); q.getRange('A1').values=[['COTIZACIÓN | MVP APP DE COMERCIO A CUOTAS']];
q.getRange('A1:F2').format={fill:navy,font:{bold:true,color:'#FFFFFF',size:18},verticalAlignment:'center',horizontalAlignment:'left'};
q.mergeCells('A3:F3'); q.getRange('A3').values=[['Documento para validación de lógica, alcance e inversión']]; q.getRange('A3:F3').format={font:{italic:true,color:gray,size:10}};
q.getRange('A5:B10').values=[['Fecha','12/08/2026'],['Validez','15 días calendario'],['Cliente','Por confirmar'],['Proveedor','Grupo Rincón'],['Moneda','USD'],['Entrega estimada','3 semanas desde anticipo y aprobación']];
q.getRange('A5:A10').format={fill:pale,font:{bold:true,color:navy}}; q.getRange('A5:B10').format.borders={preset:'outside',style:'thin',color:line};
q.mergeCells('D5:F5'); q.getRange('D5').values=[['RESUMEN DE INVERSIÓN']]; q.getRange('D5:F5').format={fill:blue,font:{bold:true,color:'#FFFFFF'},horizontalAlignment:'center'};
q.getRange('D6:E10').values=[['Desarrollo MVP',900],['Anticipo 50%',null],['Saldo contra entrega',null],['Mantenimiento mensual',100],['Permanencia mínima (meses)',6]];
q.getRange('E7').formulas=[['=E6*50%']]; q.getRange('E8').formulas=[['=E6-E7']];
q.getRange('D6:D10').format={fill:pale,font:{bold:true,color:navy}}; q.getRange('D5:F10').format.borders={preset:'outside',style:'thin',color:line}; q.getRange('E6:E9').format.numberFormat='$#,##0.00';
q.getRange('A12:F12').merge(); q.getRange('A12').values=[['ALCANCE ECONÓMICO']]; q.getRange('A12:F12').format={fill:navy,font:{bold:true,color:'#FFFFFF'}};
q.getRange('A13:F13').values=[['#','Entregable','Descripción','Modalidad','Monto USD','Aprobación']]; q.getRange('A13:F13').format={fill:blue,font:{bold:true,color:'#FFFFFF'},wrapText:true,horizontalAlignment:'center'};
q.getRange('A14:F15').values=[[1,'MVP 1.0','App móvil multiplataforma + Supabase + panel administrativo básico, según lógica aprobable.','Pago único',900,'Pendiente'],[2,'Mantenimiento y evolución','Monitoreo, respaldo, soporte correctivo y hasta 4 h/mes acumulables por máximo 3 meses.','Mensual',100,'Pendiente']];
q.getRange('A14:F15').format={wrapText:true,verticalAlignment:'center'}; q.getRange('E14:E15').format.numberFormat='$#,##0.00'; q.getRange('A13:F15').format.borders={preset:'all',style:'thin',color:line};
q.getRange('A17:C17').merge(); q.getRange('A17').values=[['TOTAL INICIAL']]; q.getRange('D17:F17').merge(); q.getRange('D17').formulas=[['=E14']]; q.getRange('A17:F17').format={fill:green,font:{bold:true,color:'#175C2C',size:13},borders:{preset:'outside',style:'medium',color:'#70AD47'}}; q.getRange('D17:F17').format.numberFormat='$#,##0.00';
q.getRange('A19:F19').merge(); q.getRange('A19').values=[['CONDICIONES COMERCIALES']]; q.getRange('A19:F19').format={fill:navy,font:{bold:true,color:'#FFFFFF'}};
q.getRange('A20:F24').merge(true); q.getRange('A20:A24').values=[['• 50% para iniciar y reservar agenda.'],['• 50% contra entrega, despliegue y validación funcional.'],['• Costos de cuentas de Apple/Google, mensajería, KYC, dominios y servicios de terceros no están incluidos.'],['• El mantenimiento inicia después de la entrega; contrato mínimo sugerido: 6 meses.'],['• Cualquier ampliación no descrita se cotiza o se atiende con la bolsa de evolución.']]; q.getRange('A20:F24').format={wrapText:true,fill:'#F8FAFC'};
q.getRange('A26:F26').merge(); q.getRange('A26').values=[['APROBACIÓN DEL CLIENTE']]; q.getRange('A26:F26').format={fill:blue,font:{bold:true,color:'#FFFFFF'}};
q.getRange('A27:F30').merge(true); q.getRange('A27:A30').values=[['Nombre y cargo: ______________________________________________'],['Acepto alcance y lógica:   Sí ☐   No ☐   Con observaciones ☐'],['Firma: _______________________________   Fecha: __________________'],['Observaciones: __________________________________________________']]; q.getRange('A27:F30').format={wrapText:true};
q.getRange('A1:F30').format.font={name:'Arial'}; ['A','B','C','D','E','F'].forEach((c,i)=>q.getRange(`${c}:${c}`).format.columnWidth=[5,24,46,20,16,19][i]); q.getRange('1:30').format.rowHeight=22; q.getRange('14:15').format.rowHeight=58; q.getRange('20:24').format.rowHeight=28; q.freezePanes.freezeRows(3);

logic.mergeCells('A1:H2'); logic.getRange('A1').values=[['LÓGICA FUNCIONAL PARA APROBACIÓN']]; logic.getRange('A1:H2').format={fill:navy,font:{bold:true,color:'#FFFFFF',size:18},verticalAlignment:'center'};
logic.getRange('A4:H4').values=[['Regla','Entrada','Cálculo / condición','Resultado','Responsable','Incluido MVP','Validación','Notas']]; logic.getRange('A4:H4').format={fill:blue,font:{bold:true,color:'#FFFFFF'},wrapText:true,horizontalAlignment:'center'};
logic.getRange('A5:H13').values=[
['Precio a cuotas','Precio USD definido por admin','Valor base sin recargo dinámico','Precio financiado publicado','Administrador','Sí','Pendiente','Por producto'],
['Inicial obligatoria','Precio a cuotas','Precio × 45%','Monto mínimo para liberar despacho','Sistema + admin','Sí','Pendiente','Porcentaje fijo'],
['Saldo financiado','Precio e inicial','Precio - inicial (55%)','Saldo posterior a la inicial','Sistema','Sí','Pendiente','Sin interés en MVP'],
['Plan semanal','Saldo financiado','Saldo ÷ 4','4 cuotas semanales iguales','Cliente elige','Sí','Pendiente','Fechas automáticas'],
['Plan quincenal','Saldo financiado','Saldo ÷ 2','2 cuotas quincenales iguales','Cliente elige','Sí','Pendiente','Fechas automáticas'],
['Compra de contado','Precio y rebaja','Precio - rebaja configurable','Total inmediato','Administrador','Sí','Pendiente','Rebaja por producto'],
['Conversión monetaria','Monto USD + tasa USDT','Monto × tasa vigente registrada','Referencia en moneda local','Administrador','Sí','Pendiente','Tasa manual del día; guardar snapshot'],
['Confirmación de pago','Comprobante cargado','Aprobación manual','Pago aprobado/rechazado','Administrador','Sí','Pendiente','Sin conciliación bancaria'],
['Despacho','Pago inicial aprobado','Solo habilitar tras confirmar 45%','En proceso / enviado / entregado','Administrador','Sí','Pendiente','Logística manual']];
logic.getRange('A4:H13').format={wrapText:true,verticalAlignment:'center',borders:{preset:'all',style:'thin',color:line}}; logic.getRange('F5:F13').format={fill:green,font:{bold:true,color:'#175C2C'},horizontalAlignment:'center'}; logic.getRange('G5:G13').format={fill:amber,horizontalAlignment:'center'};
logic.getRange('A15:H15').merge(); logic.getRange('A15').values=[['EJEMPLO AUDITABLE']]; logic.getRange('A15:H15').format={fill:navy,font:{bold:true,color:'#FFFFFF'}};
logic.getRange('A16:H18').values=[['Producto','Precio cuotas','Inicial 45%','Saldo 55%','Semanal (4)','Quincenal (2)','Rebaja contado','Final contado'],['Yara Candy',70,null,null,null,null,15,null],['Yara Rosada',75,null,null,null,null,15,null]];
logic.getRange('C17').formulas=[['=B17*45%']]; logic.getRange('C17:C18').fillDown(); logic.getRange('D17').formulas=[['=B17-C17']]; logic.getRange('D17:D18').fillDown(); logic.getRange('E17').formulas=[['=D17/4']]; logic.getRange('E17:E18').fillDown(); logic.getRange('F17').formulas=[['=D17/2']]; logic.getRange('F17:F18').fillDown(); logic.getRange('H17').formulas=[['=B17-G17']]; logic.getRange('H17:H18').fillDown(); logic.getRange('A16:H18').format={borders:{preset:'all',style:'thin',color:line}}; logic.getRange('A16:H16').format={fill:blue,font:{bold:true,color:'#FFFFFF'},wrapText:true}; logic.getRange('B17:H18').format.numberFormat='$#,##0.00';
logic.getRange('A1:H18').format.font={name:'Arial'}; ['A','B','C','D','E','F','G','H'].forEach((c,i)=>logic.getRange(`${c}:${c}`).format.columnWidth=[24,20,25,23,20,20,18,24][i]); logic.getRange('5:13').format.rowHeight=50; logic.freezePanes.freezeRows(4);

ass.mergeCells('A1:D2'); ass.getRange('A1').values=[['SUPUESTOS, LÍMITES Y EVOLUCIÓN']]; ass.getRange('A1:D2').format={fill:navy,font:{bold:true,color:'#FFFFFF',size:18},verticalAlignment:'center'};
ass.getRange('A4:D4').values=[['Clasificación','Elemento','Tratamiento en este presupuesto','Fase sugerida']]; ass.getRange('A4:D4').format={fill:blue,font:{bold:true,color:'#FFFFFF'},wrapText:true};
ass.getRange('A5:D17').values=[
['Incluido','App móvil','React Native + Expo, Android/iOS desde una base de código.','MVP'],['Incluido','Backend','Supabase: Auth, Postgres, Storage y políticas RLS.','MVP'],['Incluido','Catálogo','Categorías, listado, detalle, imágenes y precios.','MVP'],['Incluido','Compras','Contado o cuotas fijas; carga de comprobante.','MVP'],['Incluido','Panel básico','Productos, tasa, pedidos, pagos y estados.','MVP'],['Simplificado','KYC','Registro de datos/documentos y revisión manual; sin biometría.','MVP'],['Simplificado','Multi-tienda','Catálogo puede mostrar tiendas, pero operación y administración son centralizadas.','MVP'],['Simplificado','Notificaciones','Mensajes internos/básicos; sin automatización WhatsApp/SMS.','MVP'],['Fuera de alcance','Marketplace autogestionado','Panel independiente, afiliación, comisiones y liquidación por vendedor.','Evolución'],['Fuera de alcance','Analítica avanzada','Dashboards, cohortes, reportes/exportaciones masivas.','Evolución'],['Fuera de alcance','Logística integrada','Etiquetas, tarifas, tracking o integración con transportistas.','Evolución'],['Fuera de alcance','Cobro automático','Pasarela, débito automático y conciliación bancaria.','Evolución'],['Fuera de alcance','Publicación stores','Cuentas y tasas de Apple/Google; publicación sujeta a aprobación externa.','Opcional']];
ass.getRange('A4:D17').format={wrapText:true,verticalAlignment:'center',borders:{preset:'all',style:'thin',color:line}}; ass.getRange('A5:A9').format={fill:green}; ass.getRange('A10:A12').format={fill:amber}; ass.getRange('A13:A17').format={fill:'#FEE4E2'}; ass.getRange('A1:D17').format.font={name:'Arial'}; ['A','B','C','D'].forEach((c,i)=>ass.getRange(`${c}:${c}`).format.columnWidth=[22,30,68,18][i]); ass.getRange('5:17').format.rowHeight=48; ass.freezePanes.freezeRows(4);

await fs.mkdir(out,{recursive:true});
for (const [s,n,r] of [[q,'cotizacion','A1:F30'],[logic,'logica','A1:H18'],[ass,'supuestos','A1:D17']]) { const b=await wb.render({sheetName:s.name,range:r,scale:1.3,format:'png'}); await fs.writeFile(`${out}/${n}.png`,new Uint8Array(await b.arrayBuffer())); }
console.log((await wb.inspect({kind:'table',sheetId:'Cotización',range:'A1:F30',include:'values,formulas',tableMaxRows:30,tableMaxCols:8,maxChars:8000})).ndjson);
console.log((await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A',options:{useRegex:true,maxResults:100},summary:'formula errors'})).ndjson);
const file=await SpreadsheetFile.exportXlsx(wb); await file.save(`${out}/Cotizacion_MVP_App_Cuotas.xlsx`);
