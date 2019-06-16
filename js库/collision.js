  /*碰撞检测*/
  function collision(e1,e2){
    let Rect=e1.getBoundingClientRect();
    let Rect2=e2.getBoundingClientRect();
   /*四种情况*/
   /*
   e1.top>e2.bottom
   e1.bottom<e2.top
   e1.left>e2.right
   e1.right<e2.left
   */
    /**/
    if(Rect.top>Rect2.bottom
    ||Rect.bottom<Rect2.top
    ||Rect.left>Rect2.right
    ||Rect.right<Rect2.left){
        return false;
    }
    return true;
}