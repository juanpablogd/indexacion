$( document ).ready(function() {  
  var img = $('#image');
  var imageDataIni = '{"rotate":0,"scaleX":1,"scaleY":1,"naturalWidth":728,"naturalHeight":1200,"aspectRatio":0.6066666666666667,"width":419,"height":690.6593406593406,"left":0,"top":0}';
  var cropBoxDataIni = '{"left":26.899999999999977,"top":0,"width":378.1552197802198,"height":94.53880494505495}';
  var options = {
        aspectRatio: 4 / 1,
        preview: '.img-preview',
        crop: function (e) {
          //console.log("------------------");
          /* console.log(e.x);
          console.log(e.y);
          console.log(e.width);
          console.log(e.height);
          console.log(e.rotate);
          console.log(e.scaleX);
          console.log(e.scaleY); */
          //console.log(JSON.stringify(img.cropper('getImageData')));
          //console.log(JSON.stringify(img.cropper('getCropBoxData')));
        },
        ready: function () {
          img.cropper('setData', jQuery.parseJSON(imageDataIni));
          img.cropper('setCropBoxData', jQuery.parseJSON(cropBoxDataIni));
          $(this).cropper('clear');
          //$(this).cropper('disable');
          //console.log("READY!!!");
        }
      };


  img.cropper(options);
    //url:'http://'+localStorage.url_servidor+'/SIG/servicios/actualizar_parametros.php?id_usuario='+id_usuario,
    $.ajax({
          url:'./libs/formulario.json',
          dataType: 'json',
          success: function(data){
            if (data[0].encontrado == "true"){
                var imgParametros = {};
                for(var json in data[1].items_formulario) {      //console.log(data[1].items_formulario[json][2]);
                  var rta = data[1].items_formulario[json][2];
                  var obligatorio = "";                         //console.log(data[1].items_formulario[json][0]);
                  if(data[1].items_formulario[json][3] == "S") {obligatorio = "required";}
                  if (rta == "TEXTO"){
                    $("#items").append('<div id="f'+data[1].items_formulario[json][0]+'" class="form-group '+obligatorio+'"><label name="l'+data[1].items_formulario[json][0]+'" id="l'+data[1].items_formulario[json][0]+'" class="control-label">'+data[1].items_formulario[json][1]+'</label><input type="text" class="form-control" name="'+data[1].items_formulario[json][0]+'" id="'+data[1].items_formulario[json][0]+'" placeholder="'+data[1].items_formulario[json][1]+'" value=""  maxlength="255" '+obligatorio+' visible="true"/></div>');
                  }else if (rta == "PARRAFO") {
                    $("#items").append('<div id="f'+data[1].items_formulario[json][0]+'" class="form-group '+obligatorio+'"><label name="l'+data[1].items_formulario[json][0]+'" id="l'+data[1].items_formulario[json][0]+'" class="control-label">'+data[1].items_formulario[json][1]+'</label><textarea class="form-control" cols="40" rows="8"  name="'+data[1].items_formulario[json][0]+'" id="'+data[1].items_formulario[json][0]+'" value="" '+obligatorio+' visible="true"/></textarea></div>'); /* $('#'+id_item).textinput(); */
                  }else if (rta == "CANTIDAD") {
                    $("#items").append('<div id="f'+data[1].items_formulario[json][0]+'" class="form-group '+obligatorio+'"><label name="l'+data[1].items_formulario[json][0]+'" id="l'+data[1].items_formulario[json][0]+'" class="control-label">'+data[1].items_formulario[json][1]+'</label><input type="number" class="form-control" name="'+data[1].items_formulario[json][0]+'" id="'+data[1].items_formulario[json][0]+'" placeholder="'+data[1].items_formulario[json][1]+'" value="" '+obligatorio+' onkeypress="if (event.keyCode< 48 || event.keyCode > 57) event.returnValue = false;" visible="true"/></div>'); /* $('#'+id_item).textinput(); */
                  }else if (rta == "FECHA") {
                    $("#items").append('<div id="f'+data[1].items_formulario[json][0]+'" class="form-group '+obligatorio+'"><label name="l'+data[1].items_formulario[json][0]+'" id="l'+data[1].items_formulario[json][0]+'" class="control-label" >'+data[1].items_formulario[json][1]+'</label><input type="text" class="form-control" tipo="fecha"  name="'+data[1].items_formulario[json][0]+'" id="'+data[1].items_formulario[json][0]+'" value="" '+obligatorio+' onkeypress="if (event.keyCode< 47 || event.keyCode > 57) event.returnValue = false;" visible="true"/></div>');
                  }else if (rta == "SELECCION") {
                    $("#items").append('<div id="f'+data[1].items_formulario[json][0]+'" class="form-group '+obligatorio+'"><label name="l'+data[1].items_formulario[json][0]+'" id="l'+data[1].items_formulario[json][0]+'" class="select control-label"" >'+data[1].items_formulario[json][1]+'</label><select class="form-control" name="'+data[1].items_formulario[json][0]+'" id="'+data[1].items_formulario[json][0]+'" '+obligatorio+' onchange="getval(this);" visible="true"><option value=""></option</select></div>');
                  }else if (rta == "LISTA") {
                    $("#items").append('<div id="f'+data[1].items_formulario[json][0]+'" class="form-group '+obligatorio+'"><label name="l'+data[1].items_formulario[json][0]+'" id="l'+data[1].items_formulario[json][0]+'" class="select control-label"" >'+data[1].items_formulario[json][1]+'</label></div>');
                  }else if (rta == "LECTOR") {
                    $("#items").append('<div id="f'+data[1].items_formulario[json][0]+'" class="form-group '+obligatorio+'"><label name="l'+data[1].items_formulario[json][0]+'" id="l'+data[1].items_formulario[json][0]+'" class="control-label">'+data[1].items_formulario[json][1]+'</label><input type="text" class="form-control" name="'+data[1].items_formulario[json][0]+'" id="'+data[1].items_formulario[json][0]+'" placeholder="'+data[1].items_formulario[json][1]+'" value="" '+obligatorio+' visible="true" disabled="true"/><button onclick="scanea('+data[1].items_formulario[json][0]+')" id="btn_scanea'+data[1].items_formulario[json][0]+'" class="btn btn-sm btn-primary"><span class="glyphicon glyphicon-chevron-up"></span> Escanear <span class="glyphicon glyphicon-qrcode"></span></button></div>'); /* $('#'+id_item).textinput(); */
                  }else if (rta == "INFO") {
                    $("#items").append('<div id="f'+data[1].items_formulario[json][0]+'" class="form-group "><span name="'+data[1].items_formulario[json][0]+'" id="'+data[1].items_formulario[json][0]+'" class="label label-info">'+data[1].items_formulario[json][1]+'</span></div>');  /* $('#'+id_item).textinput(); */
                  }
                  //CREA OBJETO DE PARAMETROS DE IMAGENES
                  imgParametros["imageData"+data[1].items_formulario[json][0]] = JSON.stringify(data[1].items_formulario[json][4]);
                  //console.log(JSON.stringify(data[1].items_formulario[json][4]));
                  imgParametros["cropBoxData"+data[1].items_formulario[json][0]] = JSON.stringify(data[1].items_formulario[json][5]);
//data[1].items_formulario[json][0]
                }
                //BOTÓN  GUARDAR
                $("#items").append('<button type="text" class="btn btn-default">Guardar</button>');
                /* ADICIONA OPCIONES PARA LA FECHA */
                $("input[tipo='fecha']").datepicker({
                    format: "yyyy/mm/dd",
                    todayBtn: "linked",
                    language: "es",
                    multidate: false,
                    keyboardNavigation: false,
                    autoclose: true,
                    todayHighlight: true
                });
                //DEFINICIÓN DE FOCO!!!
                $( "input" ).focus(function() {
                  $(".docs-preview").insertBefore($( this ));
                  //img.cropper('enable');
                  img.cropper('crop');
                  var id = $( this ).attr('id');    //console.log(id);
                  var nom = $( this ).text();       //console.log(imgParametros["imageData"+id]);
                  img.cropper('setData', jQuery.parseJSON(imgParametros["imageData"+id]));
                  img.cropper('setCropBoxData', jQuery.parseJSON(imgParametros["cropBoxData"+id]));
                });


            }else{
              console.log("No se encontró Formulario");
              //alert("No hay Actualizaciones pendientes");
            }
          },
          error: function (error) {
              console.log("No hay conexión en el servidor Principal");  //alert("No hay conexión en el servidor Principal");
              //window.location = "principal.html";
          }
        });


/*  img.cropper('crop');
  img.cropper('clear'); */


/*  var imgParametros = {};
  imgParametros["imageData"] = [];
  imgParametros["cropBoxData"] = [];
  imgParametros["imageData"].entidad = '{"rotate":0,"scaleX":1,"scaleY":1,"naturalWidth":728,"naturalHeight":1200,"aspectRatio":0.6066666666666667,"width":419,"height":690.6593406593406,"left":0,"top":0}';
  imgParametros["cropBoxData"].entidad = '{"left":37.89999999999998,"top":94.60000000000002,"width":241.15521978021977,"height":60.28880494505494}';
  imgParametros["imageData"].oficina = '{"rotate":0,"scaleX":1,"scaleY":1,"naturalWidth":728,"naturalHeight":1200,"aspectRatio":0.6066666666666667,"width":419,"height":690.6593406593406,"left":0,"top":0}';
  imgParametros["cropBoxData"].oficina = '{"left":221.84478021978023,"top":100.60000000000002,"width":197.15521978021977,"height":49.28880494505494}';
  imgParametros["imageData"].nombre = '{"rotate":0,"scaleX":1,"scaleY":1,"naturalWidth":728,"naturalHeight":1200,"aspectRatio":0.6066666666666667,"width":419,"height":690.6593406593406,"left":0,"top":0}';
  imgParametros["cropBoxData"].nombre = '{"left":30.844780219780233,"top":132.60000000000002,"width":167.15521978021977,"height":41.78880494505494}';
  imgParametros["imageData"].direccion = '{"rotate":0,"scaleX":1,"scaleY":1,"naturalWidth":728,"naturalHeight":1200,"aspectRatio":0.6066666666666667,"width":419,"height":690.6593406593406,"left":0,"top":0}';
  imgParametros["cropBoxData"].direccion = '{"left":174,"top":141,"width":118,"height":29.5}';
  imgParametros["imageData"].telefono = '{"rotate":0,"scaleX":1,"scaleY":1,"naturalWidth":728,"naturalHeight":1200,"aspectRatio":0.6066666666666667,"width":419,"height":690.6593406593406,"left":0,"top":0}';
  imgParametros["cropBoxData"].telefono = '{"left":271,"top":139,"width":129,"height":32.25}';
  console.log(imgParametros);
  $( "input" ).focus(function() {
    $(".docs-preview").insertBefore($( this ));
    //img.cropper('enable');
    img.cropper('crop');
    var id = $( this ).attr('id');    console.log(imgParametros["imageData"][id]);
    img.cropper('setData', jQuery.parseJSON(imgParametros["imageData"][id]));
    img.cropper('setCropBoxData', jQuery.parseJSON(imgParametros["cropBoxData"][id]));
    //img.cropper('disable');
    //console.log("fin");
  }); */

});
