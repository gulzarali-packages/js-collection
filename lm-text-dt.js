   $('.datatable').on('draw.dt', function() {
        lm();
    } );
  function lm(){
    //<p data-lmWord='2' class="lm" data-lmText='any long text there'></p>
    $('#datatable  p.lm').each(function(i, obj) {
      let lm_word=$(this).attr('data-lmWord');
      let lm_text=$(this).attr('data-lmText');

      let text='';

      let lm_words_array=lm_text.split(' ');
      let total_lm_words=lm_words_array.length;

      let total_txt_words=text.split(' ').length;

      let appended_words=lm_words_array.slice(0, (parseFloat(0)+parseFloat(lm_word)));
      let appended_words_str=appended_words.join(" ");
      let final_string=text+' '+appended_words_str;
      let current_words_count=final_string.split(' ');
      var remaining_words=parseFloat(total_lm_words)-parseFloat(current_words_count.length);
      $(this).text(final_string);
      $(this).parent('td').find('.lm-btn').remove();

      if(remaining_words > 0){
        $(this).after('<button class="lm-btn" onclick=lmThis(this) style="color:blue;border:rosybrown">View More</button>');
      }
    })
  }
  function lmThis(event){
    let lm_text=$(event).parent('td').find('p').attr('data-lmText');
    $(event).parent('td').find('p').text(lm_text);
    $(event).parent('td').find('p').after('<button class="lm-btn" onclick=llThis(this) style="color:blue;border:rosybrown">View Less</button>');
    $(event).remove();
  }
  function llThis(event){
      let lm_word=$(event).parent('td').find('p').attr('data-lmWord');
      let lm_text=$(event).parent('td').find('p').attr('data-lmText');

      let text=$(event).parent('td').find('p').text();
      text='';

      let lm_words_array=lm_text.split(' ');
      let total_lm_words=lm_words_array.length;

      let total_txt_words=text.split(' ').length;

      let appended_words=lm_words_array.slice(0, (parseFloat(0)+parseFloat(lm_word)));
      let appended_words_str=appended_words.join(" ");
      let final_string=text+' '+appended_words_str;
      let current_words_count=final_string.split(' ');
      var remaining_words=parseFloat(total_lm_words)-parseFloat(current_words_count.length);
      $(event).parent('td').find('p').text(final_string);

      if(remaining_words > 0){
        $(event).parent('td').find('p').after('<button class="lm-btn" onclick=lmThis(this) style="color:blue;border:rosybrown">View More</button>');
        $(event).parent('td').find('p').focus();
        $(event).remove();
      }
  }
