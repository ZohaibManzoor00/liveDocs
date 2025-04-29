"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import StarterKit from "@tiptap/starter-kit";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import ImageResize from "tiptap-extension-resize-image";
import Underline from "@tiptap/extension-underline";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import { Color } from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { FontSizeExtension } from "@/extensions/font-size";
import { LineHeightExtension } from "@/extensions/line-height";

import { useEditorStore } from "@/store/use-editor-store";
import { useStorage } from "@liveblocks/react";

import Ruler from "./ruler";
import { Threads } from "./threads";
import { LEFT_RIGHT_MARGIN_DEFAULT } from "@/constants/editor";

interface EditorProps {
  initialContent?: string | undefined;
}

export function Editor({ initialContent }: EditorProps) {
  const liveblocks = useLiveblocksExtension({
    initialContent,
    offlineSupport_experimental: true,
  });
  const { setEditor } = useEditorStore();

  const leftMargin = useStorage((root) => root.leftMargin) ?? LEFT_RIGHT_MARGIN_DEFAULT;
  const rightMargin = useStorage((root) => root.rightMargin) ?? LEFT_RIGHT_MARGIN_DEFAULT;

  const initContent = ` <p>Fake text!</p> <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th colspan="3">Description</th>
        </tr>
        <tr>
          <td>Cyndi Lauper</td>
          <td>Singer</td>
          <td>Songwriter</td>
          <td>Actress</td>
        </tr>
      </tbody>
    </table>`;

  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px`,
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] py-10 pr-14 cursor-text",
      },
    },
    extensions: [
      StarterKit.configure({ history: false }),
      Table,
      TableCell,
      TableHeader,
      TableRow,
      TaskItem.configure({ nested: true }),
      TaskList,
      ImageResize,
      Underline,
      FontFamily,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      FontSizeExtension,
      LineHeightExtension,
      liveblocks.configure({ initContent }),
    ],
  });

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        {editor ? <EditorContent editor={editor} /> : <EditorSkeleton />}
        <Threads editor={editor} />
      </div>
    </div>
  );
}

function EditorSkeleton() {
  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible animate-pulse">
      <div className="min-w-max flex justify-center w-[816px] print:py-0 mx-auto print:w-full print:min-w-0">
        <div className="flex flex-col min-h-[1054px] w-[816px] py-10 pr-14 bg-white border border-[#C7C7C7] space-y-4 p-10"></div>
      </div>
    </div>
  );
}
