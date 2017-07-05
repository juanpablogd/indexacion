$( document ).ready(function() {  
  var options = {
        aspectRatio: 4 / 1,
        preview: '.img-preview',
        crop: function (e) {
          console.log("------------------");
          console.log(e.x);
          console.log(e.y);
          console.log(e.width);
          console.log(e.height);
          console.log(e.rotate);
          console.log(e.scaleX);
          console.log(e.scaleY);
          console.log(JSON.stringify(img.cropper('getImageData')));
          console.log(JSON.stringify(img.cropper('getCropBoxData')));
        },
        ready: function () {
          $(this).cropper('clear');
          //$(this).cropper('disable');
          //console.log("READY!!!");
        }
      };

  var img = $('#image')
  img.cropper(options);
/*  img.cropper('crop');
  img.cropper('clear'); */


  var imgParametros = {};
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
  });
});
