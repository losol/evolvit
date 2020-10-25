import CKEditor from "@ckeditor/ckeditor5-react";
import MarkdownEditor from "@losol/ckeditor5-build-markdown";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 300px;
    > div {
      min-height: 300px;
    }
  }
`;

const Editor = ({ onChange, name, value }) => {
  return (
    <Wrapper>
      <CKEditor
        config={{
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
            ],
          },
          toolbar: {
            items: [
              "heading",
              "|",
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "|",
              "link",
              "bulletedList",
              "numberedList",
              "|",
              "undo",
              "redo",
            ],
          },
          table: {
            contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
          },
        }}
        editor={MarkdownEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;
