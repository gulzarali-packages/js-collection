/**
* <p data-lmWord='2' class="lm" data-lmText="long text here to be used in load more"></p>
* lmWord= How many words you want to be displayed by default
*/



$(document).ready(function(){
    lm();
  });
  function lm(){
    //data-lmWord='2' class="lm" data-lmText
    $('.lm').each(function(i, obj) {
      let lm_word=$(this).attr('data-lmWord');
      let lm_text=$(this).attr('data-lmText');

      let text=$(this).text();

      let lm_words_array=lm_text.split(' ');
      let total_lm_words=lm_words_array.length;

      let total_txt_words=text.split(' ').length;

      let appended_words=lm_words_array.slice(total_txt_words, (parseFloat(total_txt_words)+parseFloat(lm_word)));
      let appended_words_str=appended_words.join(" ");
      let final_string=text+' '+appended_words_str;
      let current_words_count=final_string.split(' ');
      var remaining_words=parseFloat(total_lm_words)-parseFloat(current_words_count.length);
      $(this).text(final_string);

      if(remaining_words > 0){
        $(this).append(' <a onclick=lmThis(this) href="#" style="color:blue">load more ...</a>');
      }
    })
  }
  function lmThis(event){
    let lm_text=$(event).closest('p').attr('data-lmText');
    //console.log(lm_text);
    $(event).closest('p').text(lm_text);
  }
