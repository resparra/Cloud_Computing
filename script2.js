// Code goes here
function Ctrl($scope) {
           $scope.submit = function() {
        if (this.text) {
           if (this.text == "I love computers"){
             $("#video").html('<video width="320" height="240" controls autoplay><source src="https://dl.dropboxusercontent.com/u/10068994/i_love_comp.m4v" type="video/mp4"></video>');
           }
        if (this.text == "I broke the teapot"){
             $("#video").html('<video width="320" height="240" controls autoplay><source src="https://dl.dropboxusercontent.com/u/10068994/i_break_teapot.m4v" type="video/mp4"></video>');
           }
        if (this.text == "Today we can help the deaf community"){
             $("#video").html('<video width="320" height="240" controls autoplay><source src="https://dl.dropboxusercontent.com/u/10068994/can_help.m4v" type="video/mp4"></video>');
           }
        else{
          $("#video").html('<p>Words were not found');
        }
           this.text = '';
           }
        };
      }
