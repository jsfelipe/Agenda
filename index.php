<!DOCTYPE html>
<html>
  <head>
    <title>Agenda Jquery - Ajax - PHP - Mysql</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
<style>
/* custom inclusion of right, left and below tabs */

.tabs-below > .nav-tabs,
.tabs-right > .nav-tabs,
.tabs-left > .nav-tabs {
  border-bottom: 0;
}

.tab-content > .tab-pane,
.pill-content > .pill-pane {
  display: none;
}

.tab-content > .active,
.pill-content > .active {
  display: block;
}


.tabs-left > .nav-tabs > li,
.tabs-right > .nav-tabs > li {
  float: none;
}

.tabs-left > .nav-tabs > li > a,
.tabs-right > .nav-tabs > li > a {
  min-width: 74px;
  margin-right: 0;
  margin-bottom: 3px;
}

.tabs-left > .nav-tabs {
  float: left;
  margin-right: 19px;
  border-right: 1px solid #ddd;
}

.tabs-left > .nav-tabs > li > a {
  margin-right: -1px;
  -webkit-border-radius: 4px 0 0 4px;
     -moz-border-radius: 4px 0 0 4px;
          border-radius: 4px 0 0 4px;
}

.tabs-left > .nav-tabs > li > a:hover,
.tabs-left > .nav-tabs > li > a:focus {
  border-color: #eeeeee #dddddd #eeeeee #eeeeee;
}

.tabs-left > .nav-tabs .active > a,
.tabs-left > .nav-tabs .active > a:hover,
.tabs-left > .nav-tabs .active > a:focus {
  border-color: #ddd transparent #ddd #ddd;
  *border-right-color: #ffffff;
}

.tab-content label{
  font-weight:normal;
  width:100%;
  display:block;
}

.list-group{
  margin-left: 92px;
  margin-top: 10px;
}

.mt40{margin-top: 40px}

.tabbable{
  border-right: 1px solid #ddd;
  min-height: 400px;
}

#editar_foto{
  position: absolute;
  z-index: 100;
  padding: 2px;
  text-align: center;
  top: 75px;
  left: 40px;
  font-size: 11px;
}

</style>
    
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/funcoes.js"></script>

<script type="text/javascript"> 
$(function() {


$('.tip').tooltip('hide')

});
</script>


  </head>
<body>
  <div class="container">	

  <div class="row">
    
    <h1>Agenda: Jquery + Json + Php + MySQL</h1>

  </div>
  

   <div class="row mt40">
     
             <div class="tabbable tabs-left col-sm-7">

              <ul class="nav nav-tabs nav-stacked" id="lista_letras">
                 
              </ul>

                <div class="tab-content">
                        <a href="#" data-toggle="modal" data-target="#myModal" style="margin-bottom:10px" class="btn btn-success" role="button"><span class="glyphicon glyphicon-plus"></span></a>

                    <!-- input buscar -->
                        <div class="">
                                <div class="input-group">
                                  <input type="text" class="form-control">
                                  <span class="input-group-btn">
                                    <button class="btn btn-default" type="button">
                                      
                                      <span class="glyphicon glyphicon-search"></span>

                                    </button>
                                  </span>
                                </div>
                        </div>
                      <!-- fim input buscar -->
                  
                    <div class="tab-pane fade in active" id="A">

                      

                      <div class="list-group">

                      </div>

                    </div>
                    
                    


                

                </div>

           
            </div>


            <div class="tab-content col-sm-5">
          <a href="#">
              <img src="http://demo.okendoken.com/img/2.jpg" class="img-thumbnail" width="80" >
              <div id="editar_foto">editar</div>
          </a>
              <h4 id="nome">
                
              </h4>
              <a href="#" data-toggle="modal" data-target="#myModal"  class="btn-md tip" role="button" data-toggle="tooltip" title="Editar"><span class="glyphicon glyphicon-edit"></span></a>

              <label><strong>E-mail:</strong><label id="email"></label></label>
              <label><strong>Casa:</strong> (81) 3032.9100</label>
              <label><strong>Celular:</strong> (81) 9747.0222</label>

              <hr>

               <label><strong>Endereço:</strong> Rua Cel. Kleber de Andrade, 900 - Candeias - Jaboatão dos Gauarapes/PE - CEP: 54450-160

              <a href="#" class="tip" data-toggle="tooltip" title="Ver no Google Maps" style="margin-bottom:10px"  role="button"><span class="glyphicon glyphicon-map-marker"></span></a>
               </label>




        </div>

   </div> 
		 

</div>


<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Novo Contato</h4>
      </div>
      <div class="modal-body">

        <form role="form" id="formNovoContato"  method="post">
          <div class="form-group">
            <label for="exampleInputEmail1">Nome:</label>
            <input type="text" class="form-control" name="txtnome" placeholder="Nome">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">E-mail</label>
            <input type="email" name="txtemail" class="form-control"  placeholder="E-mail">
          </div>
          <div class="form-group">
            <label for="exampleInputFile">Celular:</label>
            <input type="tel" id="tel" class="form-control">
            
          </div>
          <div class="form-group">
            <label for="exampleInputFile">Fone Casa:</label>
            <input type="tel" id="casa" class="form-control">
            
          </div>

           <div class="form-group">
            <label for="exampleInputFile">Endereço:</label>
            <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
            
          </div>
          
        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" id="btnSalvarContato">Salvar</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
    
  </body>
</html>