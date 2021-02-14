/* eslint-disable */

import React from 'react'
import Layout from '@utils/layout'

const App = () => (
  <Layout>
    <div>
      <h1 className="code-line" data-line-start={0} data-line-end={1}>
        <a id="Typographyjs_0" />
        Typography.js
      </h1>
      <p className="has-line-data" data-line-start={3} data-line-end={4}>
        A powerful toolkit for building websites with beautiful design.
      </p>
      <h2 className="code-line" data-line-start={5} data-line-end={6}>
        <a id="Install_5" />
        Install
      </h2>
      <p className="has-line-data" data-line-start={6} data-line-end={7}>
        <code>npm install typography</code>
      </p>
      <h2 className="code-line" data-line-start={8} data-line-end={9}>
        <a id="Demoplayground_8" />
        Demo/playground
      </h2>
      <p className="has-line-data" data-line-start={9} data-line-end={10}>
        <a href="https://kyleamathews.github.io/typography.js">
          http://kyleamathews.github.io/typography.js
        </a>
      </p>
      <h2 className="code-line" data-line-start={11} data-line-end={12}>
        <a id="Why_11" />
        Why
      </h2>
      <p className="has-line-data" data-line-start={12} data-line-end={14}>
        The goal of Typography.js is to provide a high-level elegant API for
        <br />
        expressing typographic design intent.
      </p>
      <p className="has-line-data" data-line-start={15} data-line-end={19}>
        Typography is a complex <em>system</em> of interrelated styles. 100s of
        style
        <br />
        declarations on dozens of elements must be in harmonious order. Trying
        <br />
        one design change can mean making dozens of tedious recalculations and
        <br />
        CSS value changes. Creating new Typography themes with CSS feels hard.
      </p>
      <p className="has-line-data" data-line-start={20} data-line-end={22}>
        Typography.js provides a vastly simpler way to define and
        <br />
        explore typography designs.
      </p>
      <p className="has-line-data" data-line-start={23} data-line-end={26}>
        You provide configuration to the Typography.js JS api and it uses its
        <br />
        Typography engine to generate CSS for block and inline
        <br />
        elements.
      </p>
      <p className="has-line-data" data-line-start={27} data-line-end={29}>
        Typography.js makes it easy to create designs that are unique, personal,
        and
        <br />
        custom to your project.
      </p>
      <h2 className="code-line" data-line-start={30} data-line-end={31}>
        <a id="Themes__Plugins_30" />
        Themes &amp; Plugins
      </h2>
      <ul>
        <li className="has-line-data" data-line-start={31} data-line-end={35}>
          <strong>themes</strong>: Typography.js themes are simple Javascript
          objects. As
          <br />
          such they’re easy to share across projects or even
          <br />
          <a href="https://www.npmjs.com/browse/keyword/typography-theme">
            open source and share via
            <br />
            NPM
          </a>
          .
        </li>
        <li className="has-line-data" data-line-start={35} data-line-end={39}>
          <strong>plugins</strong>: Plugins are functions that extend or modify
          the core
          <br />
          Typography engine. They can change how headers are styled
          <br />
          or add specialized styles e.g. for code or tables.
        </li>
      </ul>
      <h2 className="code-line" data-line-start={39} data-line-end={40}>
        <a id="Sites_that_use_Typographyjs_39" />
        Sites that use Typography.js
      </h2>
      <ul>
        <li className="has-line-data" data-line-start={40} data-line-end={41}>
          <a href="https://bricolage.io/?utm_source=github.com">bricolage.io</a>{' '}
          (
          <a href="https://github.com/KyleAMathews/blog/blob/master/blog-typography.coffee">
            source
          </a>
          )
        </li>
        <li className="has-line-data" data-line-start={41} data-line-end={42}>
          <a href="https://kyleamathews.github.io/react-headroom/">
            React Headroom
          </a>{' '}
          (
          <a href="https://github.com/KyleAMathews/react-headroom/blob/master/www/utils/typography.js">
            source
          </a>
          )
        </li>
        <li className="has-line-data" data-line-start={42} data-line-end={43}>
          <a href="https://gatsbyjs.github.io/gatsby-starter-blog/">
            Gatsby Blog Starter
          </a>{' '}
          (
          <a href="https://github.com/gatsbyjs/gatsby-starter-blog/blob/master/utils/typography.js">
            source
          </a>
          )
        </li>
        <li className="has-line-data" data-line-start={43} data-line-end={44}>
          <a href="http://ollieglass.com/">ollieglass.com</a>
        </li>
        <li className="has-line-data" data-line-start={44} data-line-end={46}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/README.md">
            Edit this file to add yours!
          </a>
        </li>
      </ul>
      <h2 className="code-line" data-line-start={46} data-line-end={47}>
        <a id="Javascript_usage_46" />
        Javascript usage
      </h2>
      <pre>
        <code className="has-line-data" data-line-start={48} data-line-end={65}>
          <span className="hljs-keyword">import</span> Typography{' '}
          <span className="hljs-keyword">from</span>{' '}
          <span className="hljs-string">'typography'</span>
          {'\n'}
          {'\n'}const typography = new Typography({'{'}
          {'\n'}
          {'  '}baseFontSize: <span className="hljs-string">'18px'</span>,{'\n'}
          {'  '}baseLineHeight: 1.45,{'\n'}
          {'  '}headerFontFamily: [
          <span className="hljs-string">'Avenir Next'</span>,{' '}
          <span className="hljs-string">'Helvetica Neue'</span>,{' '}
          <span className="hljs-string">'Segoe UI'</span>,{' '}
          <span className="hljs-string">'Helvetica'</span>,{' '}
          <span className="hljs-string">'Arial'</span>,{' '}
          <span className="hljs-string">'sans-serif'</span>],{'\n'}
          {'  '}bodyFontFamily: [<span className="hljs-string">'Georgia'</span>,{' '}
          <span className="hljs-string">'serif'</span>],{'\n'}
          {'  '}// See below for the full list of options.{'\n'}
          {'}'}){'\n'}
          {'\n'}// Output CSS <span className="hljs-keyword">as</span> string.
          {'\n'}typography.toString(){'\n'}
          {'\n'}// Or insert styles directly into the &lt;head&gt; (works well
          for client-only{'\n'}// JS web apps.{'\n'}typography.injectStyles()
          {'\n'}
        </code>
      </pre>
      <h2 className="code-line" data-line-start={66} data-line-end={67}>
        <a id="Themes_66" />
        Themes
      </h2>
      <p className="has-line-data" data-line-start={67} data-line-end={70}>
        We maintain 30 (and counting) themes that are ready to use on your next
        <br />
        project. These are each published as seperate NPM packages. Explore
        <br />
        themes at{' '}
        <a href="https://kyleamathews.github.io/typography.js">
          http://kyleamathews.github.io/typography.js
        </a>
        .
      </p>
      <h3 className="code-line" data-line-start={71} data-line-end={72}>
        <a id="Using_themes_71" />
        Using themes
      </h3>
      <p className="has-line-data" data-line-start={73} data-line-end={74}>
        Here’s an example of how to use the Funston theme.
      </p>
      <ol>
        <li className="has-line-data" data-line-start={75} data-line-end={77}>
          First save the package to your project{' '}
          <code>npm install --save typography-theme-funston</code>
        </li>
        <li className="has-line-data" data-line-start={77} data-line-end={79}>
          Then import and pass into Typography when initializing.
        </li>
      </ol>
      <pre>
        <code className="has-line-data" data-line-start={80} data-line-end={85}>
          <span className="hljs-keyword">import</span> Typography{' '}
          <span className="hljs-keyword">from</span>{' '}
          <span className="hljs-string">'typography'</span>
          {'\n'}
          <span className="hljs-keyword">import</span> funstonTheme{' '}
          <span className="hljs-keyword">from</span>{' '}
          <span className="hljs-string">'typography-theme-funston'</span>
          {'\n'}
          {'\n'}const typography = new Typography(funstonTheme){'\n'}
        </code>
      </pre>
      <h3 className="code-line" data-line-start={86} data-line-end={87}>
        <a id="Customizing_themes_86" />
        Customizing themes
      </h3>
      <p className="has-line-data" data-line-start={87} data-line-end={90}>
        Themes are just javascript objects so it’s easy to modify them as
        <br />
        needed. For example, if you’re using the Funston theme but want to
        <br />
        increase the base font size slightly:
      </p>
      <pre>
        <code className="has-line-data" data-line-start={92} data-line-end={98}>
          <span className="hljs-keyword">import</span> Typography{' '}
          <span className="hljs-keyword">from</span>{' '}
          <span className="hljs-string">'typography'</span>
          {'\n'}
          <span className="hljs-keyword">import</span> funstonTheme{' '}
          <span className="hljs-keyword">from</span>{' '}
          <span className="hljs-string">'typography-theme-funston'</span>
          {'\n'}funstonTheme.baseFontSize ={' '}
          <span className="hljs-string">'22px'</span> // was 20px.{'\n'}
          {'\n'}const typography = new Typography(funstonTheme){'\n'}
        </code>
      </pre>
      <p className="has-line-data" data-line-start={99} data-line-end={101}>
        Or you can use the imperative API <code>overrideThemeStyles</code> to
        directly set/override
        <br />
        styles on a theme:
      </p>
      <pre>
        <code
          className="has-line-data"
          data-line-start={103}
          data-line-end={114}
        >
          <span className="hljs-keyword">import</span> Typography{' '}
          <span className="hljs-keyword">from</span>{' '}
          <span className="hljs-string">'typography'</span>
          {'\n'}
          <span className="hljs-keyword">import</span> funstonTheme{' '}
          <span className="hljs-keyword">from</span>{' '}
          <span className="hljs-string">'typography-theme-funston'</span>
          {'\n'}funstonTheme.overrideThemeStyles = ({'{'} rhythm {'}'}, options)
          =&gt; ({'{'}
          {'\n'}
          {'  '}
          <span className="hljs-string">'h2,h3'</span>: {'{'}
          {'\n'}
          {'    '}marginBottom: rhythm(1/2),{'\n'}
          {'    '}marginTop: rhythm(2),{'\n'}
          {'  '}
          {'}'}
          {'\n'}
          {'}'}){'\n'}
          {'\n'}const typography = new Typography(funstonTheme){'\n'}
        </code>
      </pre>
      <h3 className="code-line" data-line-start={115} data-line-end={116}>
        <a id="Published_Typographyjs_Themes_115" />
        Published Typography.js Themes
      </h3>
      <ul>
        <li className="has-line-data" data-line-start={116} data-line-end={117}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-alton/">
            typography-theme-alton
          </a>
        </li>
        <li className="has-line-data" data-line-start={117} data-line-end={118}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-de-young/">
            typography-theme-de-young
          </a>
        </li>
        <li className="has-line-data" data-line-start={118} data-line-end={119}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-doelger/">
            typography-theme-doelger
          </a>
        </li>
        <li className="has-line-data" data-line-start={119} data-line-end={120}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-elk-glen/">
            typography-theme-elk-glen
          </a>
        </li>
        <li className="has-line-data" data-line-start={120} data-line-end={121}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-fairy-gates/">
            typography-theme-fairy-gates
          </a>
        </li>
        <li className="has-line-data" data-line-start={121} data-line-end={122}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-funston/">
            typography-theme-funston
          </a>
        </li>
        <li className="has-line-data" data-line-start={122} data-line-end={123}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-grand-view/">
            typography-theme-grand-view
          </a>
        </li>
        <li className="has-line-data" data-line-start={123} data-line-end={124}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-irving/">
            typography-theme-irving
          </a>
        </li>
        <li className="has-line-data" data-line-start={124} data-line-end={125}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-judah/">
            typography-theme-judah
          </a>
        </li>
        <li className="has-line-data" data-line-start={125} data-line-end={126}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-lawton/">
            typography-theme-lawton
          </a>
        </li>
        <li className="has-line-data" data-line-start={126} data-line-end={127}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-lincoln/">
            typography-theme-lincoln
          </a>
        </li>
        <li className="has-line-data" data-line-start={127} data-line-end={128}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-kirkham/">
            typography-theme-kirkham
          </a>
        </li>
        <li className="has-line-data" data-line-start={128} data-line-end={129}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-moraga/">
            typography-theme-moraga
          </a>
        </li>
        <li className="has-line-data" data-line-start={129} data-line-end={130}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-noriega/">
            typography-theme-noriega
          </a>
        </li>
        <li className="has-line-data" data-line-start={130} data-line-end={131}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-ocean-beach/">
            typography-theme-ocean-beach
          </a>
        </li>
        <li className="has-line-data" data-line-start={131} data-line-end={132}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-parnassus/">
            typography-theme-parnassus
          </a>
        </li>
        <li className="has-line-data" data-line-start={132} data-line-end={133}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-st-annes/">
            typography-theme-st-annes
          </a>
        </li>
        <li className="has-line-data" data-line-start={133} data-line-end={134}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-stow-lake/">
            typography-theme-stow-lake
          </a>
        </li>
        <li className="has-line-data" data-line-start={134} data-line-end={135}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-sutro/">
            typography-theme-sutro
          </a>
        </li>
        <li className="has-line-data" data-line-start={135} data-line-end={136}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-stern-grove/">
            typography-theme-stern-grove
          </a>
        </li>
        <li className="has-line-data" data-line-start={136} data-line-end={137}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-twin-peaks/">
            typography-theme-twin-peaks
          </a>
        </li>
        <li className="has-line-data" data-line-start={137} data-line-end={138}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-kubrick/">
            typography-theme-wordpress-kubrick
          </a>
        </li>
        <li className="has-line-data" data-line-start={138} data-line-end={139}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2010/">
            typography-theme-wordpress-2010
          </a>
        </li>
        <li className="has-line-data" data-line-start={139} data-line-end={140}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2011/">
            typography-theme-wordpress-2011
          </a>
        </li>
        <li className="has-line-data" data-line-start={140} data-line-end={141}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2012/">
            typography-theme-wordpress-2012
          </a>
        </li>
        <li className="has-line-data" data-line-start={141} data-line-end={142}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2013/">
            typography-theme-wordpress-2013
          </a>
        </li>
        <li className="has-line-data" data-line-start={142} data-line-end={143}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2014/">
            typography-theme-wordpress-2014
          </a>
        </li>
        <li className="has-line-data" data-line-start={143} data-line-end={144}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2015/">
            typography-theme-wordpress-2015
          </a>
        </li>
        <li className="has-line-data" data-line-start={144} data-line-end={145}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2016/">
            typography-theme-wordpress-2016
          </a>
        </li>
        <li className="has-line-data" data-line-start={145} data-line-end={146}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-github/">
            typography-theme-wordpress-github
          </a>
        </li>
        <li className="has-line-data" data-line-start={146} data-line-end={147}>
          <a href="https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wikipedia/">
            typography-theme-wordpress-wikipedia
          </a>
        </li>
        <li className="has-line-data" data-line-start={147} data-line-end={149}>
          If you publish your own, create a PR to add it here!
        </li>
      </ul>
      <h2 className="code-line" data-line-start={149} data-line-end={150}>
        <a id="Plugins_149" />
        Plugins
      </h2>
      <p className="has-line-data" data-line-start={150} data-line-end={154}>
        Plugins are functions that extend or modify the core typography engine.
        <br />
        they can change how headers are styled or add specialized styles e.g.
        <br />
        for code or tables. Currently there’s one plugin available,
        <br />
        <code>typography-plugin-code</code>.
      </p>
      <p className="has-line-data" data-line-start={155} data-line-end={156}>
        To use the Code plugin, first install using NPM.
      </p>
      <p className="has-line-data" data-line-start={157} data-line-end={158}>
        <code>npm install --save typography-plugin-code</code>
      </p>
      <p className="has-line-data" data-line-start={159} data-line-end={160}>
        Then add to your theme before creating a new typography object.
      </p>
      <pre>
        <code
          className="has-line-data"
          data-line-start={162}
          data-line-end={172}
        >
          <span className="hljs-keyword">import</span> Typography{' '}
          <span className="hljs-keyword">from</span>{' '}
          <span className="hljs-string">'typography'</span>
          {'\n'}
          <span className="hljs-keyword">import</span> CodePlugin{' '}
          <span className="hljs-keyword">from</span>{' '}
          <span className="hljs-string">'typography-plugin-code'</span>
          {'\n'}
          <span className="hljs-keyword">import</span> sternGroveTheme{' '}
          <span className="hljs-keyword">from</span>{' '}
          <span className="hljs-string">'typography-theme-stern-grove'</span>
          {'\n'}
          {'\n'}sternGroveTheme.plugins = [{'\n'}
          {'  '}new CodePlugin(),{'\n'}]{'\n'}
          {'\n'}const typography = new Typography(sternGroveTheme){'\n'}
        </code>
      </pre>
      <h2 className="code-line" data-line-start={173} data-line-end={174}>
        <a id="Reactjs_helper_components_173" />
        React.js helper components.
      </h2>
      <p className="has-line-data" data-line-start={174} data-line-end={177}>
        Typography.js includes two helper components for your React.js projects,
        <br />
        <code>TypographyStyle</code> and <code>GoogleFont</code>. These are
        ideal for
        <br />
        server-rendering.
      </p>
      <ul>
        <li className="has-line-data" data-line-start={178} data-line-end={180}>
          <code>TypographyStyle</code> creates a style element and inserts the
          generated
          <br />
          CSS for your theme.
        </li>
        <li className="has-line-data" data-line-start={180} data-line-end={183}>
          <code>GoogleFont</code> creates the link element to include the Google
          Fonts &amp;
          <br />
          weights specified in your theme.
        </li>
      </ul>
      <p className="has-line-data" data-line-start={183} data-line-end={185}>
        To use, first install the package{' '}
        <code>npm install --save react-typography</code>
        <br />
        then import them into your <code>html.js</code> file.
      </p>
      <pre>
        <code
          className="has-line-data"
          data-line-start={187}
          data-line-end={203}
        >
          <span className="hljs-keyword">import</span> {'{'} TypographyStyle,
          GoogleFont {'}'} <span className="hljs-keyword">from</span>{' '}
          <span className="hljs-string">'react-typography'</span>
          {'\n'}// Best practice is to have a typography module{'\n'}// where
          you define your theme.{'\n'}
          <span className="hljs-keyword">import</span> typography{' '}
          <span className="hljs-keyword">from</span>{' '}
          <span className="hljs-string">'utils/typography'</span>
          {'\n'}
          {'\n'}// Inside your React.js HTML component.{'\n'}&lt;html&gt;{'\n'}
          {'  '}&lt;head&gt;{'\n'}
          {'    '}&lt;TypographyStyle typography={'{'}typography{'}'} /&gt;
          {'\n'}
          {'    '}&lt;GoogleFont typography={'{'}typography{'}'} /&gt;{'\n'}
          {'  '}&lt;/head&gt;{'\n'}
          {'  '}&lt;body&gt;{'\n'}
          {'    '}// stuff{'\n'}
          {'  '}&lt;/body&gt;{'\n'}&lt;/html&gt;{'\n'}
        </code>
      </pre>
      <h2 className="code-line" data-line-start={204} data-line-end={205}>
        <a id="API_204" />
        API
      </h2>
      <h3 className="code-line" data-line-start={206} data-line-end={207}>
        <a id="Configuration_206" />
        Configuration
      </h3>
      <p className="has-line-data" data-line-start={207} data-line-end={209}>
        When creating a new instance of Typography, you can pass in an
        <br />
        <em>configuration</em> object. All configuration keys are optional.
      </p>
      <ul>
        <li className="has-line-data" data-line-start={210} data-line-end={211}>
          <strong>title</strong>: The theme title.
        </li>
        <li className="has-line-data" data-line-start={211} data-line-end={212}>
          <strong>baseFontSize</strong>: The base font size in pixels, defaults
          to <code>16px</code>.
        </li>
        <li className="has-line-data" data-line-start={212} data-line-end={213}>
          <strong>baseLineHeight</strong>: The base line height using the css
          unitless number, defaults to <code>1.45</code>.
        </li>
        <li className="has-line-data" data-line-start={213} data-line-end={216}>
          <strong>scaleRatio</strong>: The “scale ratio” for the theme. This
          value is the ratio
          <br />
          between the <code>h1</code> font size and the{' '}
          <code>baseFontSize</code>. So if the scale ratio is <code>2</code>
          <br />
          and the <code>baseFontSize</code> is <code>16px</code> then the{' '}
          <code>h1</code> font size is <code>32px</code>.
        </li>
      </ul>
      <pre>
        <code
          className="has-line-data"
          data-line-start={217}
          data-line-end={221}
        >
          {'{'}
          {'\n'}
          {'  '}scaleRatio: <span className="hljs-number">2</span>,{'\n'}
          {'}'}
          {'\n'}
        </code>
      </pre>
      <ul>
        <li className="has-line-data" data-line-start={221} data-line-end={222}>
          <strong>googleFonts</strong>: An array specifying Google Fonts for
          this project.
        </li>
      </ul>
      <pre>
        <code
          className="has-line-data"
          data-line-start={223}
          data-line-end={241}
        >
          googleFonts: [{'\n'}
          {'  '}
          {'{'}
          {'\n'}
          {'    '}name: <span className="hljs-string">'Montserrat'</span>,{'\n'}
          {'    '}styles: [{'\n'}
          {'      '}
          <span className="hljs-string">'700'</span>,{'\n'}
          {'    '}],{'\n'}
          {'  '}
          {'}'},{'\n'}
          {'  '}
          {'{'}
          {'\n'}
          {'    '}name: <span className="hljs-string">'Merriweather'</span>,
          {'\n'}
          {'    '}styles: [{'\n'}
          {'      '}
          <span className="hljs-string">'400'</span>,{'\n'}
          {'      '}
          <span className="hljs-string">'400i'</span>,{'\n'}
          {'      '}
          <span className="hljs-string">'700'</span>,{'\n'}
          {'      '}
          <span className="hljs-string">'700i'</span>,{'\n'}
          {'    '}],{'\n'}
          {'  '}
          {'}'},{'\n'}],{'\n'}
        </code>
      </pre>
      <ul>
        <li className="has-line-data" data-line-start={241} data-line-end={244}>
          <strong>headerFontFamily</strong>: An array of strings specifying the
          font family
          <br />
          stack for headers e.g. <code>['Helvetica', 'sans-serif']</code>.
          Defaults to a<br />
          system UI font stack.
        </li>
        <li className="has-line-data" data-line-start={244} data-line-end={246}>
          <strong>bodyFontFamily</strong>: An array of strings specifying the
          font family
          <br />
          stack for the body, defaults to <code>['georgia', 'serif']</code>.
        </li>
        <li className="has-line-data" data-line-start={246} data-line-end={248}>
          <strong>headerColor</strong>: A css color string to be set on headers.
          Defaults
          <br />
          to <code>inherit</code>.
        </li>
        <li className="has-line-data" data-line-start={248} data-line-end={250}>
          <strong>bodyColor</strong>: A css color string to be set for body
          text. Defaults
          <br />
          to <code>hsl(0,0%,0%,0.8)</code>.
        </li>
        <li className="has-line-data" data-line-start={250} data-line-end={252}>
          <strong>headerWeight</strong>: Specify the font weight for headers.
          Defaults to
          <br />
          <code>bold</code>.
        </li>
        <li className="has-line-data" data-line-start={252} data-line-end={254}>
          <strong>bodyWeight</strong>: Specify the font weight for body text.
          Defaults to
          <br />
          <code>normal</code>.
        </li>
        <li className="has-line-data" data-line-start={254} data-line-end={256}>
          <strong>boldWeight</strong>: Specify the font weight for “bold” (b,
          strong, dt, th)
          <br />
          elements. Defaults to <code>bold</code>.
        </li>
        <li className="has-line-data" data-line-start={256} data-line-end={258}>
          <strong>blockMarginBottom</strong>: Specify the default margin-bottom
          for block
          <br />
          elements. Defaults to one “rhythm unit” (i.e. the height of the base
          line height).
        </li>
        <li className="has-line-data" data-line-start={258} data-line-end={264}>
          <strong>includeNormalize</strong>: Include normalize.css.
          <br />
          Normalize.css is an excellent project which works to normalize the
          <br />
          base browser CSS across browsers and serves as an excellent foundation
          <br />
          for Typography.js. We include normalize.CSS by default but if you’re
          <br />
          already including it elsewhere in your project, you can disable
          <br />
          including it here by passing <code>false</code>.
        </li>
        <li className="has-line-data" data-line-start={264} data-line-end={269}>
          <strong>overrideStyles</strong>: Imperative API for directly adding to
          or
          <br />
          overriding auto-generated styles. It’s called with a Vertical
          <br />
          Rhythm object, the options object, and the algorithmically generated
          <br />
          styles.
        </li>
      </ul>
      <pre>
        <code
          className="has-line-data"
          data-line-start={270}
          data-line-end={287}
        >
          overrideStyles: ({'{'} adjustFontSizeTo, rhythm {'}'}, options,
          styles) =&gt; ({'{'}
          {'\n'}
          {'  '}h1: {'{'}
          {'\n'}
          {'    '}fontFamily: [<span className="hljs-string">'Montserrat'</span>
          , <span className="hljs-string">'sans-serif'</span>].join(
          <span className="hljs-string">','</span>),{'\n'}
          {'  '}
          {'}'},{'\n'}
          {'  '}blockquote: {'{'}
          {'\n'}
          {'    '}...adjustFontSizeTo(
          <span className="hljs-string">'19px'</span>),{'\n'}
          {'    '}color: gray(<span className="hljs-number">41</span>),{'\n'}
          {'    '}fontStyle: <span className="hljs-string">'italic'</span>,
          {'\n'}
          {'    '}paddingLeft: rhythm(<span className="hljs-number">13</span>/
          <span className="hljs-number">16</span>),{'\n'}
          {'    '}marginLeft: rhythm(-<span className="hljs-number">1</span>),
          {'\n'}
          {'    '}borderLeft:{' '}
          <span className="hljs-string">
            `
            <span className="hljs-subst">
              ${'{'}rhythm(3/16){'}'}
            </span>{' '}
            solid{' '}
            <span className="hljs-subst">
              ${'{'}gray(10){'}'}
            </span>
            `
          </span>
          ,{'\n'}
          {'  '}
          {'}'},{'\n'}
          {'  '}
          <span className="hljs-string">
            'blockquote &gt; :last-child'
          </span>: {'{'}
          {'\n'}
          {'    '}marginBottom: <span className="hljs-number">0</span>,{'\n'}
          {'  '}
          {'}'},{'\n'}
          {'}'}){'\n'}
        </code>
      </pre>
      <ul>
        <li className="has-line-data" data-line-start={287} data-line-end={292}>
          <strong>overrideThemeStyles</strong>: This has the same function
          signature as
          <br />
          <code>overrideStyles</code> but should be used in place of{' '}
          <code>overrideStyles</code> when
          <br />
          using a 3rd-party theme so as to not delete the theme’s own
          <br />
          <code>overrideStyles</code> function.
        </li>
      </ul>
      <pre>
        <code
          className="has-line-data"
          data-line-start={293}
          data-line-end={300}
        >
          overrideThemeStyles: ({'{'} rhythm {'}'}, options, styles) =&gt; (
          {'{'}
          {'\n'}
          {'  '}
          <span className="hljs-string">'h2,h3'</span>: {'{'}
          {'\n'}
          {'    '}marginBottom: rhythm(<span className="hljs-number">1</span>/
          <span className="hljs-number">2</span>),{'\n'}
          {'    '}marginTop: rhythm(<span className="hljs-number">2</span>),
          {'\n'}
          {'  '}
          {'}'}
          {'\n'}
          {'}'}){'\n'}
        </code>
      </pre>
      <h2 className="code-line" data-line-start={301} data-line-end={302}>
        <a id="Related_301" />
        Related
      </h2>
      <ul>
        <li className="has-line-data" data-line-start={303} data-line-end={305}>
          <a href="https://github.com/BarryThePenguin/postcss-typography">
            postcss-typography
          </a>
        </li>
      </ul>
      <h2 className="code-line" data-line-start={305} data-line-end={306}>
        <a id="Developing_Typographyjs_305" />
        Developing Typography.js
      </h2>
      <p className="has-line-data" data-line-start={306} data-line-end={308}>
        Typography.js is a monorepo facilitated by
        <br />
        <a href="https://github.com/lerna/lerna">Lerna</a>.
      </p>
      <p className="has-line-data" data-line-start={309} data-line-end={311}>
        TODO: document constants + compass-vertical-rhythm + using typgraphy.js
        <br />
        for inline styles.
      </p>
    </div>
  </Layout>
)

export default App
