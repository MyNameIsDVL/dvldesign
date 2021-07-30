import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  success(message: string, delayIn: number, delayOut: number) {
    let tooltip = $("body").append('<div id="dvl-tooltip" class="dvl-tooltip-box"><p id="dvl-message"></p></div>');
    $('#dvl-message').text(message);
    $('#dvl-tooltip').fadeIn(delayIn);
    $('#dvl-tooltip').fadeOut(delayOut);
    $('#dvl-tooltip').css({
      "background-color":"#229954",
      "border-radius":"5px",
      "border":"none",
      "position":"absolute",
      "top":"5px",
      "right":"5px",
      "width":"200px",
      "height":"30px",
      "padding":"20px",
      "z-index":"9999",
      "-webkit-box-shadow":"0 0 10px rgba(0,0,0,0.8)",
      "-moz-box-shadow":"0 0 10px rgba(0,0,0,0.8)",
      "box-shadow":"0 0 10px rgba(0,0,0,0.8)"
    });
    $('#dvl-message').css({
      "color":"white",
      "font-size":"18px",
      "width":"100%",
      "height":"100%",
      "display":"flex",
      "justify-content":"center",
      "align-items":"center"
    });  
    return tooltip;
  }

  error(message: string, delayIn: number, delayOut: number) {
    let tooltip = $("body").append('<div id="dvl-tooltip" class="dvl-tooltip-box"><p id="dvl-message"></p></div>');
    $('#dvl-message').text(message);
    $('#dvl-tooltip').fadeIn(delayIn);
    $('#dvl-tooltip').fadeOut(delayOut);
    $('#dvl-tooltip').css({
      "background-color":"#C0392B",
      "border-radius":"5px",
      "border":"none",
      "position":"absolute",
      "top":"5px",
      "right":"5px",
      "width":"200px",
      "height":"30px",
      "padding":"20px",
      "z-index":"9999",
      "-webkit-box-shadow":"0 0 10px rgba(0,0,0,0.8)",
      "-moz-box-shadow":"0 0 10px rgba(0,0,0,0.8)",
      "box-shadow":"0 0 10px rgba(0,0,0,0.8)"
    });
    $('#dvl-message').css({
      "color":"white",
      "font-size":"18px",
      "width":"100%",
      "height":"100%",
      "display":"flex",
      "justify-content":"center",
      "align-items":"center"
    });
    return tooltip;
  }

}
