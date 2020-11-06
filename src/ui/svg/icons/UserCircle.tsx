import * as React from 'react'
import Svg, { Path, Rect, G } from 'react-native-svg'

import { ColorsEnum } from 'ui/theme'

import { IconInterface } from './types'

export const UserCircle: React.FunctionComponent<IconInterface> = ({
  size = 32,
  color = ColorsEnum.BLACK,
  testID,
}) => (
  <Svg width={size} height={size} viewBox="0 0 42 42" testID={testID}>
    <G fill="none" fill-rule="evenodd">
      <G>
        <G fill="none" transform="translate(-313 -23) translate(314 24)">
          <Rect width="40" height="40" stroke={color} rx="20" />
          <G fill="#FFF">
            <Path
              fill={color}
              d="M17.093 17.704l-.234-.021c-.03-.003-.061-.005-.092-.006l.092.006c-.078-.006-.156-.01-.235-.013l-.211-.003c-.115 0-.23.003-.344.01-.133.007-.265.018-.395.034l-.042.005.042-.005c-.075.009-.149.02-.223.03l.181-.025c-.112.014-.223.031-.334.052l.153-.026c-.076.012-.15.025-.226.04l.073-.014c-.066.012-.131.025-.197.04l.124-.026c-.085.017-.17.035-.255.055l.131-.03c-.064.014-.128.03-.19.045l.06-.015c-.08.02-.158.04-.235.062l.174-.047-.226.061.052-.014c-.073.02-.146.042-.218.066l.166-.052c-.082.025-.164.05-.246.078l.08-.026c-.07.022-.14.047-.21.072l.13-.046c-.088.03-.175.062-.26.095l.13-.05c-.066.025-.132.05-.197.077l.066-.027c-.065.026-.13.052-.193.08l.127-.053c-.085.034-.17.07-.253.108l.126-.055c-.064.027-.127.055-.19.085l.064-.03c-.074.034-.147.07-.22.106l.157-.076c-.068.032-.136.065-.203.1l.047-.024c-.065.033-.129.066-.192.101l.145-.077c-.075.039-.15.08-.224.122l.08-.045c-.07.038-.138.078-.205.118l.125-.073c-.064.036-.127.074-.19.112l.065-.039c-.06.036-.118.072-.176.11l.112-.07c-.077.046-.152.095-.227.146l.115-.076c-.143.092-.281.19-.416.295l-.04.03.04-.03-.139.11.1-.08c-.124.098-.244.2-.36.305l-.102.097.103-.097c-.06.054-.117.11-.174.166l.071-.07c-.099.096-.195.194-.287.296-.035.037-.068.075-.101.113l-.142.169c-.144.179-.279.366-.403.561-.069.108-.135.22-.197.332l-.038.07.038-.07-.08.15.042-.08c-.075.14-.145.283-.209.43l-.034.078.034-.078c-.03.068-.058.136-.086.205l.052-.127-.083.207.031-.08c-.03.075-.058.151-.085.228l.054-.148c-.03.079-.058.159-.085.24l.031-.092c-.026.076-.051.152-.075.23l.044-.139c-.028.085-.054.17-.079.256l.035-.118c-.021.07-.041.138-.06.208l.025-.09-.063.237.038-.147-.06.24.022-.093c-.02.084-.039.17-.056.254l-.006.033.114.122c.04.043.081.086.123.128l.04.041-.04-.041c.066.067.134.133.202.198l-.161-.157c.09.09.183.18.278.265l-.117-.108c.07.067.142.133.215.197l-.098-.089c.056.051.112.101.169.15l-.07-.061c.072.064.146.127.22.189l-.15-.128c.168.145.34.282.518.412l.113.082-.113-.082c.057.042.114.082.171.122l-.058-.04c.081.057.164.113.247.167l-.189-.127c.183.127.371.246.564.357.041.024.083.048.125.07l.25.134c.336.171.683.318 1.04.441.07.025.14.048.212.07l.113.035-.113-.035c.068.022.136.042.205.062l-.092-.027c.281.084.568.152.858.205.054.01.107.02.16.028l-.16-.028c.102.019.204.036.307.05l-.147-.022c.08.013.161.025.243.036l-.096-.014c.098.015.197.027.296.037l-.2-.023c.114.015.228.027.343.038l-.143-.015c.096.01.193.02.29.026l-.147-.011c.087.007.175.014.262.019l-.116-.008c.112.008.224.013.337.017l.24.003c.917 0 1.811-.151 2.659-.444.26-.09.545.049.636.31.09.26-.049.545-.31.635-.833.288-1.706.454-2.6.491l-.384.008c-.204 0-.406-.006-.608-.02-.223-.015-.446-.038-.667-.068-.366-.051-.726-.124-1.079-.218-1.784-.475-3.388-1.483-4.605-2.903l-.034-.045-.016-.024.05.069c-.095-.11-.137-.258-.115-.402.123-.79.372-1.536.727-2.215.84-1.61 2.269-2.85 3.988-3.45l.223-.074.052-.016c.66-.201 1.36-.31 2.084-.31 3.516 0 6.489 2.553 7.06 5.983l.014.082c.018.116-.006.234-.066.334l-.015.023c-.01.016-.022.03-.034.045-.491.573-1.05 1.084-1.663 1.52-.225.16-.537.107-.697-.118-.16-.226-.108-.538.118-.698.468-.333.901-.715 1.292-1.14l.036-.041-.014-.077c-.023-.11-.049-.219-.077-.327-.015-.057-.031-.114-.048-.17l.048.17c-.021-.079-.044-.157-.067-.235l.019.065c-.02-.07-.043-.14-.066-.209l.047.144c-.024-.077-.05-.154-.076-.23l.03.086-.073-.204.043.117c-.027-.077-.056-.153-.086-.229l.043.112c-.03-.08-.06-.157-.093-.235l.05.123c-.028-.07-.057-.14-.087-.209l.037.086c-.028-.065-.056-.129-.085-.192l.048.106c-.064-.145-.134-.288-.208-.427-.093-.173-.193-.34-.3-.5-.087-.132-.179-.26-.276-.383-.119-.152-.245-.299-.377-.439l-.044-.046.044.046c-.053-.056-.107-.111-.162-.166l.118.12c-.058-.06-.118-.12-.179-.178l.06.058c-.055-.054-.11-.107-.168-.16l.108.102-.16-.149.052.048c-.11-.1-.224-.197-.342-.29l-.109-.084.11.084c-.068-.052-.136-.104-.205-.153l.095.07c-.052-.04-.104-.078-.158-.116l.063.046c-.063-.047-.128-.092-.194-.135l.131.09c-.062-.045-.125-.087-.189-.129l.058.039c-.065-.043-.13-.085-.197-.126l.14.087c-.07-.045-.14-.088-.212-.13l.072.043c-.061-.037-.123-.074-.185-.109l.113.065c-.064-.038-.129-.075-.194-.11l.081.045c-.075-.042-.15-.083-.227-.122l.146.077c-.068-.037-.136-.073-.205-.107l.06.03c-.069-.035-.137-.068-.206-.1l.146.07c-.07-.035-.14-.068-.212-.1l.066.03c-.062-.029-.125-.057-.188-.084l.122.053c-.079-.035-.158-.069-.238-.1l.116.047c-.086-.036-.172-.07-.26-.103l.144.055c-.065-.026-.13-.05-.196-.075l.052.02c-.074-.028-.15-.054-.225-.08l.173.06c-.076-.027-.153-.053-.23-.078l.057.019c-.241-.08-.489-.144-.742-.193l-.126-.024.126.024c-.08-.016-.163-.03-.245-.043l-.252-.033zm-.68-11.037c2.064 0 3.738 1.673 3.738 3.738v1.793c0 2.065-1.674 3.739-3.738 3.739-2.065 0-3.739-1.674-3.739-3.739v-1.793c0-2.065 1.674-3.738 3.74-3.738zm0 1c-1.513 0-2.739 1.226-2.739 2.738v1.793c0 1.513 1.227 2.739 2.74 2.739 1.511 0 2.737-1.226 2.737-2.739v-1.793c0-1.512-1.226-2.738-2.738-2.738z"
              transform="translate(4 4)"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
)
