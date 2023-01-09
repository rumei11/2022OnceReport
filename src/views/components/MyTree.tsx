import { reactive } from "vue";

type Tree = {
  id: number;
  text: string;
  childrens?: Tree[];
  type?: number;
};

const reac = reactive<Tree[]>([]);

type Props = {
  treeData: Tree[];
};

const levelRender = (renderData: Tree) => {
  console.log(renderData?.childrens?.map, "childrens");
  return (
    <div
      style={{
        width: "200px",
        "min-height": "50px",
        background: "red",
      }}
      class="m-2 text-center text-blue-300"
    >
      <div>
        &lt;&lt;<span>{renderData.text}</span>
        {renderData?.childrens?.map((_) => levelRender(_))}
      </div>
    </div>
  );
};

const simpleDemo = (num: number) => {
  return new Array(num).fill(1).map((_, index) => <div>{index}</div>);
};

const randDom = (prop: Props, ctx: any) => {
  const { treeData } = prop;
  return treeData.map((_) => levelRender(_));
};

export default randDom;
