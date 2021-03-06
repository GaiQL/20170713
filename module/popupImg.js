      function Circle() {
        this.popupImg_box = document.createElement('div');
        this.popupImg_img = document.createElement('img');
        this.popupImg_btn = document.createElement('div');
        this.popupImg_spn = document.createElement('span');
        this.body = document.getElementsByTagName('body')[0];
        this.mask = document.createElement('div');
        this.originalOffsetLeft = '';
        this.originalOffsetTop = '';
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.creates();
      }

      Circle.prototype.desire = function(){
         let offsetLeft = parseInt(this.popupImg_box.style.top);
         let offsetTop = parseInt(this.popupImg_box.style.left);
         console.log(offsetLeft,offsetTop)
         this.mask.style.opacity = '0';
         this.mask.style.zIndex = '-1';
         this.popupImg_box.style.opacity = '0';
         this.popupImg_box.style.zIndex = '-1';
         this.popupImg_img.style.width = 0;
         this.popupImg_img.style.height = 0;

         //有点击元素的起始TOP,LEFT值，
         // var timerWithdrawTop = setInterval(()=>{
         //   if( offsetTop < this.originalOffsetTop ){
         //     offsetTop += 5;
         //     this.popupImg_box.style.top = offsetTop + 'px';
         //     if( offsetTop > this.originalOffsetTop ){
         //       clearInterval(timerWithdrawTop);
         //     }
         //   }else if( offsetTop > this.originalOffsetTop ){
         //     offsetTop -= 5;
         //     this.popupImg_box.style.top = offsetTop + 'px';
         //     if( offsetTop < this.originalOffsetTop ){
         //       clearInterval(timerWithdrawTop);
         //     }
         //   }
         // },5)
         //
         // var timerWithdrawLeft = setInterval(()=>{
         //   console.log(offsetLeft)
         //   console.log( this.originalOffsetLeft )
         //   if( offsetLeft == this.originalOffsetLeft ){
         //     clearInterval(timerWithdrawLeft);
         //   }
         //   if( offsetLeft < this.originalOffsetLeft ){
         //     offsetLeft += 5;
         //     this.popupImg_box.style.left = offsetLeft + 'px';
         //     if( offsetLeft > this.originalOffsetLeft ){
         //       clearInterval(timerWithdrawLeft);
         //     }
         //   }else if( offsetLeft > this.originalOffsetLeft ){
         //     offsetLeft -= 5;
         //     this.popupImg_box.style.left = offsetLeft + 'px';
         //     if( offsetLeft < this.originalOffsetLeft ){
         //       clearInterval(timerWithdrawLeft);
         //     }
         //   }
         // },5)

       }

      Circle.prototype.creates = function(){
        this.mask.style.height = this.height-1 + 'px';
        this.mask.style.width = this.width-1 + 'px';
        this.mask.className = 'popupImg_mask';
        this.mask.onclick = ()=>{
          this.desire();
        }
        this.body.appendChild(this.mask);

        this.popupImg_spn.className = 'popupImg_btnTex';
        this.popupImg_spn.onclick = ()=>{
          this.desire();
        }
        this.popupImg_spn.innerHTML = '确定';
        this.popupImg_btn.appendChild(this.popupImg_spn);
        this.popupImg_box.className = 'popupImg_boxStyle';
        this.popupImg_box.style.minWidth = this.width/6 + 'px';
        this.popupImg_box.style.minHeight = this.height/5 + 'px';

        this.popupImg_img.className = 'popupImg_img';
        // popupImg_btn.innerHTML = '<span class="popupImg_btnTex" onclick="desire()">确定</span>';
        this.popupImg_btn.className = 'popupImg_btn';
        this.popupImg_box.style.top = 0 + 'px';
        this.popupImg_box.style.left = 0 + 'px';
        this.popupImg_box.appendChild(this.popupImg_img);
        this.popupImg_box.appendChild(this.popupImg_btn);
        // popupImg_box.innerHTML = '<img class="" src="' + + '"/><div class="popupImg_boxButton"></div>'
        this.body.appendChild(this.popupImg_box);
      }


      Circle.prototype.popupImg = function( obj ){
        console.log( obj.element.offsetLeft,obj.element.offsetTop )
          this.originalOffsetLeft = obj.element.offsetLeft;
          this.originalOffsetTop = obj.element.offsetTop;
          this.popupImg_img.src = obj.imgUrl;
            //点击元素的TOP LEFT, 也是弹出层起始的TOP LEFT
            var offsetLeft = this.originalOffsetLeft;
            var offsetTop = this.originalOffsetTop;
            this.popupImg_box.style.top = offsetTop + 'px';
            this.popupImg_box.style.left = offsetLeft + 'px';

            var timerTop = setInterval(()=>{
              if( offsetTop > this.height/2-((this.height*0.5+40)/2) ){
                offsetTop -= 5;
                this.popupImg_box.style.top = offsetTop + 'px';
                //起始TOP值小于中间目标TOP值
                if( offsetTop < this.height/2-((this.height*0.5+40)/2) ){
                  clearInterval(timerTop);
                }
              }else if( offsetTop < this.height/2-((this.height*0.5+40)/2) ){
                offsetTop += 5;
                this.popupImg_box.style.top = offsetTop + 'px';
                //起始TOP值大于中间目标TOP值
                if( offsetTop > this.height/2-((this.height*0.5+40)/2) ){
                  clearInterval(timerTop);
                }
              }
            },5)

            var timerLeft = setInterval(()=>{
              if( offsetLeft > this.width/2-((this.width*0.6+40)/2) ){
                offsetLeft -= 5;
                this.popupImg_box.style.left = offsetLeft + 'px';
                if( offsetLeft < this.width/2-((this.width*0.6+40)/2) ){
                  clearInterval(timerLeft);
                }
              }else if( offsetLeft < this.width/2-((this.width*0.6+40)/2) ){
                offsetLeft += 5;
                this.popupImg_box.style.left = offsetLeft + 'px';
                if( offsetLeft > this.width/2-((this.width*0.6+40)/2) ){
                  clearInterval(timerLeft);
                }
              }
            },5)

            this.mask.style.opacity = '.5';
            this.mask.style.zIndex = '2';
            this.popupImg_box.style.opacity = '1';
            this.popupImg_box.style.zIndex = '3';
            this.popupImg_img.style.width =  this.width*0.6 + 'px';
            this.popupImg_img.style.height = this.height*0.5 + 'px';
      }
      // Circle.PI = 3.14159;
      // Circle.prototype.area = function() {
      //   return Circle.PI * this.r * this.r;
      // }

      // var c = new Circle();
      //
      // for( let i=0;i<boxs.length;i++ ){
      //   boxs[i].onclick = function(){
      //     c.popupImg({
      //       element:boxs[i],
      //       imgUrl:'http://image-product-web.oss-cn-beijing.aliyuncs.com/ym_product/20180208095947.png'
      //     })
      //   }
      // }


        //
      // function createElements(){
      // }
      // createElements();


      // var popupImg = function( obj ){
      //
      //   let box = obj.element;
      //   let height = innerHeight;
      //   let width = innerWidth;
      //
      //   let originalOffsetLeft = box.offsetLeft;
      //   let originalOffsetTop = box.offsetTop;
      //
      //   function desire(){
      //     //获取当前浮层的定位；
      //     let offsetLeft = parseInt(popupImg_box.style.top);
      //     let offsetTop = parseInt(popupImg_box.style.left);
      //     mask.style.opacity = '0';
      //     mask.style.zIndex = '-1';
      //     popupImg_box.style.opacity = '0';
      //     popupImg_box.style.zIndex = '-1';
      //     popupImg_img.style.width = 0;
      //     popupImg_img.style.height = 0;
      //
      //     //有点击元素的起始TOP,LEFT值，
      //     var timerWithdrawTop = setInterval(function(){
      //       if( offsetTop < originalOffsetTop ){
      //         offsetTop += 5;
      //         popupImg_box.style.top = offsetTop + 'px';
      //         if( offsetTop > originalOffsetTop ){
      //           clearInterval(timerWithdrawTop);
      //         }
      //       }else if( offsetTop > originalOffsetTop ){
      //         offsetTop -= 5;
      //         popupImg_box.style.top = offsetTop + 'px';
      //         if( offsetTop < originalOffsetTop ){
      //           clearInterval(timerWithdrawTop);
      //         }
      //       }
      //     },5)
      //
      //     var timerWithdrawLeft = setInterval(function(){
      //
      //       if( offsetLeft < originalOffsetLeft ){
      //         offsetLeft += 5;
      //         popupImg_box.style.left = offsetLeft + 'px';
      //         if( offsetLeft > originalOffsetLeft ){
      //           clearInterval(timerWithdrawLeft);
      //         }
      //       }else if( offsetLeft > originalOffsetLeft ){
      //         offsetLeft -= 5;
      //         popupImg_box.style.left = offsetLeft + 'px';
      //         if( offsetLeft < originalOffsetLeft ){
      //           clearInterval(timerWithdrawLeft);
      //         }
      //       }
      //     },5)
      //   }
      //
      //   let body = document.getElementsByTagName('body')[0];
      //   let mask = document.createElement('div');
      //   mask.style.height = height-1 + 'px';
      //   mask.style.width = width-1 + 'px';
      //   mask.className = 'popupImg_mask';
      //   mask.onclick = desire;
      //   body.appendChild(mask);
      //
      //
      //
      //   box.onclick = function(){
      //     mask.style.opacity = '.5';
      //     mask.style.zIndex = '2';
      //     popupImg_box.style.opacity = '1';
      //     popupImg_box.style.zIndex = '3';
      //     popupImg_img.style.width =  width*0.6 + 'px';
      //     popupImg_img.style.height = height*0.5 + 'px';
      //
      //
      //     //点击元素的TOP LEFT, 也是弹出层起始的TOP LEFT
      //     let offsetLeft = originalOffsetLeft;
      //     let offsetTop = originalOffsetTop;
      //     popupImg_box.style.top = offsetTop + 'px';
      //     popupImg_box.style.left = offsetLeft + 'px';
      //
      //     var timerTop = setInterval(function(){
      //       if( offsetTop > height/2-((height*0.5+40)/2) ){
      //         offsetTop -= 5;
      //         popupImg_box.style.top = offsetTop + 'px';
      //         //起始TOP值小于中间目标TOP值
      //         if( offsetTop < height/2-((height*0.5+40)/2) ){
      //           clearInterval(timerTop);
      //         }
      //       }else if( offsetTop < height/2-((height*0.5+40)/2) ){
      //         offsetTop += 5;
      //         popupImg_box.style.top = offsetTop + 'px';
      //         //起始TOP值大于中间目标TOP值
      //         if( offsetTop > height/2-((height*0.5+40)/2) ){
      //           clearInterval(timerTop);
      //         }
      //       }
      //     },5)
      //
      //     var timerLeft = setInterval(function(){
      //       if( offsetLeft > width/2-((width*0.6+40)/2) ){
      //         offsetLeft -= 5;
      //         popupImg_box.style.left = offsetLeft + 'px';
      //         if( offsetLeft < width/2-((width*0.6+40)/2) ){
      //           clearInterval(timerLeft);
      //         }
      //       }else if( offsetLeft < width/2-((width*0.6+40)/2) ){
      //         offsetLeft += 5;
      //         popupImg_box.style.left = offsetLeft + 'px';
      //         if( offsetLeft > width/2-((width*0.6+40)/2) ){
      //           clearInterval(timerLeft);
      //         }
      //       }
      //     },5)
      //   }
      //
      // }


      // popupImg({
      //   element:document.getElementsByClassName('box')[0],
      //   imgUrl:"http://image-product-web.oss-cn-beijing.aliyuncs.com/ym_product/20180224160608.jpeg"
      // })
      //
      // popupImg({
      //   element:document.getElementsByClassName('box')[1],
      //   imgUrl:"http://image-product-web.oss-cn-beijing.aliyuncs.com/ym_product/20180224160608.jpeg"
      // })
      //
      // popupImg({
      //   element:document.getElementsByClassName('box')[2],
      //   imgUrl:"http://image-product-web.oss-cn-beijing.aliyuncs.com/ym_product/20180224160608.jpeg"
      // })




      // alert(c.area());
