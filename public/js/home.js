// -----------------------------------------------------------------------
//      ex01.js
//
//                                      Jun/20/2018
//
/*
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
*/
// -----------------------------------------------------------------------
jQuery (function ()
{
      var clipboard_company_name = new ClipboardJS('.btn_company_name_clipboard');
      var clipboard_postcode = new ClipboardJS('.postcode_clipboard');

      console.log("test");

      // クリップ成功
      // var copy_success = $('.copy_success').append('<span class="clipboard-success">コピーしました</span>')

      // clipboard.on('success', function(e) {
      //   $('.clipboard-success').fadeIn(1000).fadeOut(1000);
      // });

      // clipboard.on('success', function(e) {
      //   $('.clipboard-success').fadeIn(1000).fadeOut(1000);
      // });

     //依頼企業情報ボタン
    // $(".from_copany_button").click(function(){
    //  $.when(
    //        $('.container-fluid').fadeOut("fast"),
    //        $('.from_copany_button').fadeOut("fast")
    //     )
    //     .done(function(){
    //       $(".companies_list_button").fadeIn("fast");
    //       $(".from_company_info").fadeIn("fast");
    //       $(".to_company_info").fadeIn("fast");
    //     });
    // });
  

    // $(".companies_list_button").click(function(){
    //  $.when(
    //        $('.companies_list_button').fadeOut("fast"),
    //        $('.from_company_info').fadeOut("fast"),
    //        $(".to_company_info").fadeOut("fast")
    //     )
    //     .done(function(){
    //       $(".container-fluid").fadeIn("fast");
    //       $(".from_copany_button").fadeIn("fast");
    //     });
    // });


});
// -----------------------------------------------------------------------