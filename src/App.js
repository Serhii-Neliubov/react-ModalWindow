import React, { useState } from "react";
import Modal from "./modal/Modal";
import './App.css'

function App() {
  const [active, setActive] = useState(false)

  return (
    <div className='app'>
      <main>
        <button onClick={() => setActive(true)} className='open-btn btn'>Открыть модальное окно</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus interdum ultricies. Donec at tempus ante. Nullam luctus augue porttitor porttitor auctor. Etiam ipsum nibh, vehicula sit amet tincidunt in, dapibus eu urna. Sed sollicitudin mollis lacus quis consequat. Integer pretium euismod dignissim. Curabitur eget turpis enim. Nam sed massa vitae sapien pellentesque lobortis. Curabitur rhoncus et enim eget luctus.Mauris ullamcorper faucibus ipsum, ut vehicula turpis pulvinar et. Praesent quis aliquam est, in fringilla mauris. Curabitur ut leo lectus. Phasellus magna felis, imperdiet non sodales non, posuere eget sapien. Aenean a metus nec dui mattis finibus et et mi. Sed non dignissim nulla. Duis tristique ornare ante sed pellentesque. Proin posuere bibendum dignissim. Maecenas finibus facilisis gravida. Vestibulum hendrerit sit amet leo in dictum. Nunc congue lorem non molestie sollicitudin. Suspendisse vel purus sed felis efficitur tincidunt.Nam accumsan vulputate lorem vel sollicitudin. Praesent posuere erat sed sodales tincidunt. Quisque odio nisl, pharetra quis tellus eu, pellentesque mattis urna. Aliquam vitae tellus vel est malesuada posuere. Nunc a nunc convallis, semper urna sed, varius quam. Cras vitae mi in metus ultrices vehicula ut vitae nulla. In rutrum, magna at mattis laoreet, arcu quam condimentum magna, eu volutpat dui augue vel purus. Aenean condimentum ex tellus, at vehicula ligula volutpat sit amet. Integer eleifend sed nunc eget tincidunt. Maecenas lacus neque, laoreet et tortor sit amet, posuere egestas ante. Nam sem libero, pretium sit amet tellus et, rhoncus imperdiet nisi. Vestibulum pulvinar nulla ut porta vehicula. Donec ut magna gravida, scelerisque erat ac, interdum quam. Donec aliquam ornare purus, at fermentum est finibus vitae. Pellentesque feugiat feugiat tellus, quis aliquet nisi mattis eget.Suspendisse viverra aliquet turpis vitae ornare. Donec interdum sollicitudin massa ac rutrum. Nullam ac ipsum augue. Integer a nisl aliquam, ornare justo auctor, vehicula odio. Donec eget tellus eu velit pharetra luctus. Duis in risus auctor, condimentum arcu non, auctor nibh. Vestibulum ac erat massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porttitor luctus nisl, vitae laoreet dolor interdum a. In id quam mauris.Nunc tempus lacinia augue, nec pellentesque massa placerat mollis. Vestibulum rhoncus, nunc eu tristique dapibus, ipsum turpis tempor lorem, et blandit odio odio sit amet arcu. Nullam mattis, dui nec rhoncus lobortis, libero leo vestibulum mi, at pharetra odio augue et ante. Ut mattis ac elit vel mattis. Aliquam luctus purus vel nibh sollicitudin fermentum. Etiam mauris magna, tincidunt vitae posuere vitae, tincidunt at massa. Phasellus posuere mi quam, nec aliquam turpis mollis et. Nullam ac enim a felis suscipit efficitur. Etiam hendrerit vel neque vitae convallis. Nam vehicula semper elit. Morbi imperdiet mattis sapien eget tempor. Mauris elementum placerat consequat. Nullam tempor, eros id pulvinar laoreet, enim quam sagittis ipsum, sed maximus odio dolor at dolor. Donec dictum felis vitae euismod faucibus. Maecenas volutpat sem vel turpis ultrices sagittis. Vivamus rhoncus purus a nulla tincidunt vulputate.Aliquam malesuada pharetra arcu, sit amet sagittis metus accumsan ac. Ut bibendum nisl dolor. Nullam malesuada risus vel ex malesuada pharetra. Duis cursus nulla ut velit dignissim dapibus. Etiam cursus diam eget mauris rhoncus dictum. Nullam luctus sed nisl et malesuada. Suspendisse pretium tellus risus, et sagittis lacus ultricies a. Aenean quis rhoncus urna. Nullam euismod ut velit ac dapibus. Donec vel orci in metus faucibus viverra. Vivamus luctus interdum iaculis. Sed molestie pellentesque elit, a laoreet magna finibus quis. Duis volutpat mauris at nulla egestas finibus. Nulla facilisi. Nunc sem massa, consectetur euismod sagittis et, consectetur et nibh. Proin ultricies, leo vitae euismod pretium, lorem nisi convallis ante, eget aliquam nibh tellus nec neque.Aliquam accumsan placerat lacus, bibendum facilisis erat sollicitudin sed. Duis ac tincidunt quam. Ut ut viverra lectus, sed aliquam quam. Aliquam orci libero, vestibulum vitae diam id, semper vulputate nibh. Pellentesque non porta ligula, vel posuere quam. Donec sit amet vestibulum neque. Morbi eget pharetra sem.Nulla metus nunc, tempor eu auctor ut, feugiat sed purus. Integer porttitor elit vel nisi interdum faucibus. Aliquam a rhoncus ipsum. In porttitor libero eu magna eleifend, ut rutrum neque consectetur. Morbi tempor elit porta nisl ornare malesuada. Sed eget mi orci. Proin sodales non erat ut dapibus. Pellentesque ut sem id massa iaculis consequat ac vel odio.Duis libero eros, viverra id lorem id, pellentesque lobortis est. Maecenas euismod ligula non sapien efficitur, non placerat lorem interdum. Quisque auctor orci eu nisi ullamcorper vulputate. Fusce eros ex, dapibus quis augue eget, venenatis posuere ex. Nulla ultricies libero eu laoreet bibendum. Morbi volutpat nisl ex, sit amet pretium mauris elementum ac. Phasellus pharetra, eros pharetra tempor feugiat, tortor tortor efficitur dui, at venenatis dui lectus varius orci. Aliquam tincidunt tempor odio, ac egestas lacus vestibulum vel. Sed suscipit leo sit amet orci ornare, nec porta lorem aliquam. Nullam et dolor vel ipsum aliquet faucibus. Mauris at neque dapibus, tristique velit sed, dignissim nisl.Nunc ac viverra dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam orci velit, pretium in finibus vel, ornare sed neque. Suspendisse et ultricies tortor. Vivamus nec molestie enim, vitae dictum arcu. Vestibulum convallis ornare ipsum, nec accumsan urna molestie vitae. Nulla luctus enim eget odio mollis, nec interdum tellus pharetra. Sed vehicula, orci quis facilisis eleifend, enim nisl varius mi, at consequat tellus eros at sem. Nullam diam ipsum, suscipit vel turpis ut, convallis blandit dolor. Phasellus molestie vitae libero sit amet gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, massa sed ultrices scelerisque, lectus ipsum euismod ex, eget tempus magna lorem et dolor. Donec commodo porta bibendum. Vivamus vitae sodales massa. Phasellus dignissim lacus vehicula ante volutpat ultricies.Cras rutrum augue a nisl euismod viverra. Vivamus nec elit leo. Sed id ante et felis molestie malesuada. Sed pulvinar elementum enim et bibendum. Phasellus sit amet libero ante. Donec est lacus, hendrerit a ipsum id, ultrices convallis tortor. Mauris blandit egestas aliquet. In dignissim sem at viverra egestas. Sed elit orci, viverra faucibus ultrices id, consectetur vel orci. Curabitur tellus dui, iaculis pellentesque leo eget, finibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus interdum ultricies. Donec at tempus ante. Nullam luctus augue porttitor porttitor auctor. Etiam ipsum nibh, vehicula sit amet tincidunt in, dapibus eu urna. Sed sollicitudin mollis lacus quis consequat. Integer pretium euismod dignissim. Curabitur eget turpis enim. Nam sed massa vitae sapien pellentesque lobortis. Curabitur rhoncus et enim eget luctus.Mauris ullamcorper faucibus ipsum, ut vehicula turpis pulvinar et. Praesent quis aliquam est, in fringilla mauris. Curabitur ut leo lectus. Phasellus magna felis, imperdiet non sodales non, posuere eget sapien. Aenean a metus nec dui mattis finibus et et mi. Sed non dignissim nulla. Duis tristique ornare ante sed pellentesque. Proin posuere bibendum dignissim. Maecenas finibus facilisis gravida. Vestibulum hendrerit sit amet leo in dictum. Nunc congue lorem non molestie sollicitudin. Suspendisse vel purus sed felis efficitur tincidunt.Nam accumsan vulputate lorem vel sollicitudin. Praesent posuere erat sed sodales tincidunt. Quisque odio nisl, pharetra quis tellus eu, pellentesque mattis urna. Aliquam vitae tellus vel est malesuada posuere. Nunc a nunc convallis, semper urna sed, varius quam. Cras vitae mi in metus ultrices vehicula ut vitae nulla. In rutrum, magna at mattis laoreet, arcu quam condimentum magna, eu volutpat dui augue vel purus. Aenean condimentum ex tellus, at vehicula ligula volutpat sit amet. Integer eleifend sed nunc eget tincidunt. Maecenas lacus neque, laoreet et tortor sit amet, posuere egestas ante. Nam sem libero, pretium sit amet tellus et, rhoncus imperdiet nisi. Vestibulum pulvinar nulla ut porta vehicula. Donec ut magna gravida, scelerisque erat ac, interdum quam. Donec aliquam ornare purus, at fermentum est finibus vitae. Pellentesque feugiat feugiat tellus, quis aliquet nisi mattis eget.Suspendisse viverra aliquet turpis vitae ornare. Donec interdum sollicitudin massa ac rutrum. Nullam ac ipsum augue. Integer a nisl aliquam, ornare justo auctor, vehicula odio. Donec eget tellus eu velit pharetra luctus. Duis in risus auctor, condimentum arcu non, auctor nibh. Vestibulum ac erat massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porttitor luctus nisl, vitae laoreet dolor interdum a. In id quam mauris.Nunc tempus lacinia augue, nec pellentesque massa placerat mollis. Vestibulum rhoncus, nunc eu tristique dapibus, ipsum turpis tempor lorem, et blandit odio odio sit amet arcu. Nullam mattis, dui nec rhoncus lobortis, libero leo vestibulum mi, at pharetra odio augue et ante. Ut mattis ac elit vel mattis. Aliquam luctus purus vel nibh sollicitudin fermentum. Etiam mauris magna, tincidunt vitae posuere vitae, tincidunt at massa. Phasellus posuere mi quam, nec aliquam turpis mollis et. Nullam ac enim a felis suscipit efficitur. Etiam hendrerit vel neque vitae convallis. Nam vehicula semper elit. Morbi imperdiet mattis sapien eget tempor. Mauris elementum placerat consequat. Nullam tempor, eros id pulvinar laoreet, enim quam sagittis ipsum, sed maximus odio dolor at dolor. Donec dictum felis vitae euismod faucibus. Maecenas volutpat sem vel turpis ultrices sagittis. Vivamus rhoncus purus a nulla tincidunt vulputate.Aliquam malesuada pharetra arcu, sit amet sagittis metus accumsan ac. Ut bibendum nisl dolor. Nullam malesuada risus vel ex malesuada pharetra. Duis cursus nulla ut velit dignissim dapibus. Etiam cursus diam eget mauris rhoncus dictum. Nullam luctus sed nisl et malesuada. Suspendisse pretium tellus risus, et sagittis lacus ultricies a. Aenean quis rhoncus urna. Nullam euismod ut velit ac dapibus. Donec vel orci in metus faucibus viverra. Vivamus luctus interdum iaculis. Sed molestie pellentesque elit, a laoreet magna finibus quis. Duis volutpat mauris at nulla egestas finibus. Nulla facilisi. Nunc sem massa, consectetur euismod sagittis et, consectetur et nibh. Proin ultricies, leo vitae euismod pretium, lorem nisi convallis ante, eget aliquam nibh tellus nec neque.Aliquam accumsan placerat lacus, bibendum facilisis erat sollicitudin sed. Duis ac tincidunt quam. Ut ut viverra lectus, sed aliquam quam. Aliquam orci libero, vestibulum vitae diam id, semper vulputate nibh. Pellentesque non porta ligula, vel posuere quam. Donec sit amet vestibulum neque. Morbi eget pharetra sem.Nulla metus nunc, tempor eu auctor ut, feugiat sed purus. Integer porttitor elit vel nisi interdum faucibus. Aliquam a rhoncus ipsum. In porttitor libero eu magna eleifend, ut rutrum neque consectetur. Morbi tempor elit porta nisl ornare malesuada. Sed eget mi orci. Proin sodales non erat ut dapibus. Pellentesque ut sem id massa iaculis consequat ac vel odio.Duis libero eros, viverra id lorem id, pellentesque lobortis est. Maecenas euismod ligula non sapien efficitur, non placerat lorem interdum. Quisque auctor orci eu nisi ullamcorper vulputate. Fusce eros ex, dapibus quis augue eget, venenatis posuere ex. Nulla ultricies libero eu laoreet bibendum. Morbi volutpat nisl ex, sit amet pretium mauris elementum ac. Phasellus pharetra, eros pharetra tempor feugiat, tortor tortor efficitur dui, at venenatis dui lectus varius orci. Aliquam tincidunt tempor odio, ac egestas lacus vestibulum vel. Sed suscipit leo sit amet orci ornare, nec porta lorem aliquam. Nullam et dolor vel ipsum aliquet faucibus. Mauris at neque dapibus, tristique velit sed, dignissim nisl.Nunc ac viverra dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam orci velit, pretium in finibus vel, ornare sed neque. Suspendisse et ultricies tortor. Vivamus nec molestie enim, vitae dictum arcu. Vestibulum convallis ornare ipsum, nec accumsan urna molestie vitae. Nulla luctus enim eget odio mollis, nec interdum tellus pharetra. Sed vehicula, orci quis facilisis eleifend, enim nisl varius mi, at consequat tellus eros at sem. Nullam diam ipsum, suscipit vel turpis ut, convallis blandit dolor. Phasellus molestie vitae libero sit amet gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, massa sed ultrices scelerisque, lectus ipsum euismod ex, eget tempus magna lorem et dolor. Donec commodo porta bibendum. Vivamus vitae sodales massa. Phasellus dignissim lacus vehicula ante volutpat ultricies.Cras rutrum augue a nisl euismod viverra. Vivamus nec elit leo. Sed id ante et felis molestie malesuada. Sed pulvinar elementum enim et bibendum. Phasellus sit amet libero ante. Donec est lacus, hendrerit a ipsum id, ultrices convallis tortor. Mauris blandit egestas aliquet. In dignissim sem at viverra egestas. Sed elit orci, viverra faucibus ultrices id, consectetur vel orci. Curabitur tellus dui, iaculis pellentesque leo eget, finibus.</p>
      </main>
      <Modal active={active} setActive={setActive}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Modal>
    </div>
  );
}

export default App;


