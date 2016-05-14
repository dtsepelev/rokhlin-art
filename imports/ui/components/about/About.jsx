/* eslint max-len: 0 */

import React from 'react'
import { styles } from './about.mss'
import classNames from 'classnames'

const classes = {
  main: 'row',
  image: classNames(styles.image, 'img-responsive'),
  imagesTop: classNames(styles.imagesTop, 'col-lg-3', 'visible-lg-block'),
  imagesBottom: classNames(styles.imagesBottom, 'hidden-lg'),
  firstLine: 'firstLine',
  imageWrapper: classNames('col-sm-6', 'col-xs-12', 'col-lg-12'),
  bio: classNames('col-lg-offset-3', 'col-lg-6'),
}

export const About = () => (
  <div>
    <div className={classes.imagesTop}>
      <div>
        <img src='/images/am1.jpg' role='presentation' className={classes.image} />
      </div>
      <div>
        <img src='/images/am2.jpg' role='presentation' className={classes.image} />
      </div>
    </div>
    <div className={classes.bio}>
      <p className={classes.firstLine}>Родился в городе Орле в январе 1954 года. Отец – театральный художник, мама – детский врач, младший брат Владимир преподает изобразительное искусство детям в Москве.</p><p>Там же в Орле учился в художественной школе, а в 1971-74 годах в Орловском государственном педагогическом университете на художественно-графическом факультете. Работал художником-декоратором в Орловском художественном фонде.</p><p>С 1976 по 1981 гг. учился на факультете керамики Петербургской академии художественно-промышленного искусства (тогда ЛВХПУ им. Мухиной). После распределения разрабатывал дизайн керамических, стеклянных и зеркальных изделий на заводах Башкирии и Петербурга.</p>С 1986 г. – член Молодежной секции Ленинградского союза художников.<p>С 1991 года член Союза художников России. Занимается художественной и монументальной керамикой, живописью, графикой. Участвует в разных выставках, иногда на Украине и в Израиле.</p>В 1986 г. познакомился с Григорием Яковлевичем Длугачем – основателем так называемой «Эрмитажной школы». Под его руководством начал изучать картины старых мастеров, копировал «стариков» в Эрмитаже после смерти учителя.<p>В 1998 году экспонировал картину в Эрмитаже на выставке «Неклассическая классика» вместе с картинами Длугача и его учеников.</p><p>С 1994 года и по сей день учит детей рисованию в общеобразовательной школе, оформляет книги, изучает средневековые изображения, пишет картины.</p>
    </div>
    <div className={classes.imagesBottom}>
      <div className={classes.imageWrapper}>
        <img src='/images/am1.jpg' role='presentation' className={classes.image} />
      </div>
      <div className={classes.imageWrapper}>
        <img src='/images/am2.jpg' role='presentation' className={classes.image} />
      </div>
    </div>
  </div>
)