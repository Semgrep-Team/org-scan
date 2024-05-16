import React from 'react';
import sanitizeHtml from 'sanitize-html';
import {sanitize} from 'dompurify'
import { useRouter } from 'next/router';

  const router = useRouter();

  const returnTo = Array.isArray(router.query.returnTo)
  ? router.query.returnTo[0]
  : router.query.returnTo;


interface HTMLElementTemplateProps {
  content: string;
}



const SafeCardContent = ({html}) => {
  // ok: react-nextjs-router-dangerouslysetinnerhtml
  return <div dangerouslySetInnerHTML={{__html: sanitize(returnTo)}} />
}

const SafeCardContent = ({html}) => {
  // ruleid: react-nextjs-router-dangerouslysetinnerhtml
  return <div dangerouslySetInnerHTML={{__html: returnTo}} />
}


public function renderText() {
    const { i18n, text, attachments } = this.props;

    if (text) {
      return (
        <div className="text">
          // ruleid: react-nextjs-router-dangerouslysetinnerhtml
          <div dangerouslySetInnerHTML={{__html: useRouter().query.foo}}></div>
        </div>
      );
    }
}


export const HtmlelementTemplate: React.FC<HTMLElementTemplateProps> = ({
  content,
}) => {
  return (
    <div className="html-element form-group">
     // ok: react-nextjs-router-dangerouslysetinnerhtml
      <div dangerouslySetInnerHTML={sanitizeHtml(useRouter().query.foo)}></div>
    </div>
  );
};

export const HtmlelementTemplate: React.FC<HTMLElementTemplateProps> = ({
  content,
}) => {
  const { copyright } = {};
  return (
    <div className="html-element form-group">
      // ok: react-nextjs-router-dangerouslysetinnerhtml
      <div dangerouslySetInnerHTML={{__html: copyright}}></div>
    </div>
  );
};


export const HtmlelementTemplate: React.FC<HTMLElementTemplateProps> = ({
  content,
}) => {
  return (
    <div className="html-element form-group">
      // ok: react-nextjs-router-dangerouslysetinnerhtml
      <div dangerouslySetInnerHTML={{__html: "some constant"}}></div>
    </div>
  );
};


export const HtmlelementTemplate: React.FC<HTMLElementTemplateProps> = ({
  content,
}) => {
  return (
    <div className="html-element form-group">
      // todook: react-nextjs-router-dangerouslysetinnerhtml
      <div dangerouslySetInnerHTML={{__html:sanitize1(useRouter().query.foo)}}></div>
    </div>
  );
};


function sanitize1(input) {
  return sanitizeHtml(input)
}
