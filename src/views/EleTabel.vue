<template>
  <h1 class="m-20 text-center text-yellow-100">fs test </h1>
  {{fsFileList}}
  <h1 class="m-20 text-center text-yellow-200">ref test </h1>
  <p class="w-1/2 h-20 bg-slate-500">{{ mymsg }}</p>
  <h1 class="m-20 text-center text-yellow-200">flex test </h1>
  <div class="flex"><span class="flex-grow bg-slate-200">1</span><span class=" bg-slate-500">1</span></div>
  <h1 class="m-20 text-center text-yellow-200">tailwind css</h1>
  <div class="flex mx-auto my-20 border" :style="{
    width: '576px', height: '256px'
  }">
    <div class="flex-none w-48 relative">
      <img src="../assets/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg" alt=""
        class="absolute inset-0 w-full h-full object-cover" />
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-xl font-semibold">
          Classic Utility Jacket
        </h1>
        <div class="text-xl font-semibold text-gray-500">
          $110.00
        </div>
        <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
          In stock
        </div>
      </div>
      <div class="flex items-baseline mt-4 mb-6">
        <div class="space-x-2 flex">
          <label>
            <input class="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg" name="size" type="radio"
              value="xs" checked>
            XS
          </label>
          <label>
            <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="s">
            S
          </label>
          <label>
            <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="m">
            M
          </label>
          <label>
            <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="l">
            L
          </label>
          <label>
            <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="xl">
            XL
          </label>
        </div>
        <div class="mx-auto text-sm text-gray-500 underline">Size Guide</div>
      </div>
      <div class="flex space-x-3 mb-4 text-sm font-medium">
        <div class="flex-auto flex space-x-3">
          <button class="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Buy
            now</button>
          <button class="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to
            bag</button>
        </div>
        <button
          class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
          type="button" aria-label="like">
          <svg width="20" height="20" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
      <p class="text-sm text-gray-500">
        Free shipping on all continental US orders.
      </p>
    </form>
  </div>
  <ul class="grid grid-cols-10 h-7">
    <li class="bg-red-50"></li>
    <li class="bg-red-100"></li>
    <li class="bg-red-200"></li>
    <li class="bg-red-300"></li>
    <li class="bg-red-400"></li>
    <li class="bg-red-500"></li>
    <li class="bg-red-600"></li>
    <li class="bg-red-700"></li>
    <li class="bg-red-800"></li>
    <li class="bg-red-900"></li>
  </ul>
  <h1 class="m-20 text-center text-yellow-200">目录层级</h1>
  <el-button type="primary" @click="toggleC">切换</el-button>
  <hr class="m-10">
  <p :style="{ '--my-color': colorRef }" class="mysty-co">我的颜色变量</p>

  <ul class="mysty-co11">
    <li class="mysty-co11">2</li>
    <li class="mysty-co11">2</li>
  </ul>

  <h1 class="m-20 text-center text-red-500">目录层级</h1>



  <el-checkbox>11</el-checkbox>


  <div class="mx-auto text-center w-96">
    <MyTree :treeData="treeData"></MyTree>
  </div>

  <h1 class="m-20 text-center text-red-500">ts new 类型</h1>
  aPo{{ aPo }}
  <hr />
  aPI{{ aPI }}

  <div class=""></div>


  <h1 class="m-20 text-center text-blue-300">pinia复习</h1>

  {{ admin.getUserInfo }}
  {{ admin.id }}
  {{ name11 }}
  <el-row>
    <el-button class="mt-5 m-auto text-center" @click="changeId">改变loginId</el-button>
  </el-row>
  <h1 class="m-20 text-center text-blue-300">ts泛形</h1>
  {{ aa }}


  <h1 class="m-20 text-center text-blue-300">pinia使用</h1>

  {{ name + age }}
  {{ user2.name }}
  <span class="text-cyan-100">{{ useName }}</span>

  <h1 class="m-20 text-center text-blue-300">虚拟列表</h1>
  <div class="w-40 h-96 relative bg-red-50 mx-auto overflow-y-scroll" @scroll="isChange">
    {{ arr.length }}
    <div :style="{
      'min-height': '100%',
      height: arr.length * 38 + 'px'
    }">
      <div class="h-9 absolute left-0 border-b w-full" :style="{
        top: item * 38 + 'px'
      }" v-for="(item) in renderArr">{{ item }}</div>
    </div>
  </div>

  <h1 class="m-20 text-center text-blue-300">环境变量实现部分功能的显示隐藏</h1>
  <div class="box">
    <el-button v-isPro @click="toSub">提交全部</el-button>
    <span>抱歉提交按钮消失了</span>
  </div>

  <h1 class="m-20 text-center text-blue-300">函数式编程</h1>
  <!-- <Btn title="124124">
    <template #default>14124124</template>
  </Btn> -->

  <hr class="m-40">
  <div class="w-screen h-96 m-auto bg-red-300">
    <div class="container">
      <span class="item item1"></span><span class="item"></span><span class="item"></span><span class="item"></span>
    </div>
  </div>
  <hr class="m-40">

  <div class="container self">
    <span class="item">1</span><span class="item">2</span>
  </div>
  <hr class="m-40">

  <span :class="[$style.red, $style.pad]">1111111111</span>
  <h3>{{ myuser }}</h3>

  <hr>
  <el-table :data="tableData" style="width: 500px">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>



<script lang="ts" setup>
import { type Directive, reactive, ref, h, useCssModule, type VNode, nextTick, toRefs } from 'vue';
import { storeToRefs } from 'pinia'
import user from '../store/user/user'
import dirObj from '../directives/index'
import { ElMessageBox, ElMessage } from 'element-plus'
import logInfo from '../store/logInfo/logInfo'
import MyTree from './components/MyTree'




let mymsg = ref('1214')

const colorRef = ref<string>('red')

const toggleC = (): void => {
  colorRef.value = colorRef.value == 'red' ? 'blue' : 'red'
  const tempVlaue: string | null = window.getComputedStyle(document.documentElement).getPropertyValue('--my-color1')
  window.document.documentElement.style.setProperty('--my-color1', tempVlaue ? '' : 'red')
}
type Tree = {
  id: number;
  text: string;
  childrens?: Tree[];
  type?: number;
};


const treeData = reactive<Tree[]>([
  {
    id: 1,
    text: '一级目录1',
    childrens: [
      {
        id: 11,
        text: '二级目录11',
        childrens: [
          {
            id: 111,
            text: '三级目录111', childrens: [
              {
                id: 111,
                text: '三级目录111',
              },
              {
                id: 112,
                text: '三级目录112', childrens: [
                  {
                    id: 111,
                    text: '三级目录111',
                  },
                  {
                    id: 112,
                    text: '三级目录112', childrens: [
                      {
                        id: 111,
                        text: '三级目录111',
                      },
                      {
                        id: 112,
                        text: '三级目录112',
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 112,
            text: '三级目录112', childrens: [
              {
                id: 111,
                text: '三级目录111',
              },
              {
                id: 112,
                text: '三级目录112',
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    text: '一级目录2',
    childrens: [
      {
        id: 22,
        text: '二级目录2.2',
      }
    ]
  }
]);


// console.log(treeData, 'treeData');


interface childA {
  name: string,
  age: number
}

interface childB {
  sex: boolean
}

type newChild<T = {}, P = {}> = ({
  new(): {
    $props: T & P
  }
} & { install: () => void })

class CC {
  $props: childA & childB
  constructor($props: childA & childB) {
    this.$props = $props
  }
  install(): void {
  }
}

const AB: newChild<childA, childB> = new CC({
  name: 'string',
  age: 1,
  sex: true
} as childA & childB) as any;


// // console.log(AB, 'ABBBBBB');


interface Myre {
  name: string,
  age: number,
  address: string
}

type AQW = Record<number, Myre>;

const aq: AQW = {
  1: {
    name: '1',
    age: 2,
    address: '2'
  }
}

// // console.log(aq, 'aq');

interface PP {
  age?: string,
  name: string,
  height?: number
}

interface PT {
  age: string,
  name: string,
  width?: number
}

const AllNed: Required<PP> = {
  age: '1',
  name: '1',
  height: 1,
}

const AllNotNeed: Partial<PP> = {
  name: '1',
}

const AllRecode: Record<keyof PT, { name: string }> = {
  age: {
    name: '1'
  },
  name: {
    name: '1'
  },
  width: {
    name: '1'
  },
}

const aPo: Pick<PP, Exclude<keyof PP, keyof PT>> = {
  height: 1
}

const aPI: Pick<PP, Extract<keyof PP, keyof PT>> = {
  age: '1',
  name: '2'
}

const AllOmit: Omit<PP, 'age' | 'name'> = {
  height: 1
}

// // console.log(aPo, 'aPo');


interface DoubleInfo {
  name: string,
  b: number
}

const toLog = <T extends DoubleInfo>(a: { new(a: string, b: number): T; }): T => {
  let insA = new a('1', 1);
  // console.log(insA.b, 'insA.b');
  return insA;
}

class B implements DoubleInfo {
  name: string
  b: number
  constructor(name: string, b: number) {
    this.name = name;
    this.b = b
  }
}

toLog(B)

const admin = (logInfo as any)();

let { name11 } = storeToRefs(admin);

admin.$onAction((args: any): void => {
  // console.log(args, 'onaction');
})

const changeId = () => {
  admin.randUSerId('randUSerId', 1, 2)

  // admin.$state = { id:22}
  admin.id = 1111
  name11.value = 124;
}

// console.log(admin, 'logInfo');



type R<T> = {
  readonly [P in keyof T]: T[P]
}

interface Person1 {
  name: string,
  mycalss: string,
  age: number,
}


class MA implements R<Person1> {
  public name: string
  public mycalss: string
  public age: number

  constructor(name: string, mycalss: string, age: number) {
    this.name = name
    this.mycalss = mycalss
    this.age = age
  }


}


let instancea = new MA('1', '2', 3)

instancea.age = 1123;


// console.log(instancea);

class A<T> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }
}

let aa = new A<string>('12');

// console.log(aa);

interface AA {
  type: 'a'
}

interface B {
  type: 'b'
}

interface C {
  type: 'c'
}

type All = AA | B | C

function tolog(all: All) {
  switch (all.type) {
    case 'a':
      // console.log('a');
      break;
    case 'b':
      // console.log('b');
      break;
    case 'c':
      // console.log('c');
      break;
    default:
      const val: never = all;
      break;
  }
}

tolog({ type: 'b' } as B)

/**
 * pinia
 */
type mytype = [number, string];
const a = <mytype>[1, '2'];
const user2 = (user as any)();
let { name, age, useName } = storeToRefs(user2);



/** */
const arr = new Array(1000).fill(1).map((item, index) => item + index);

const isShowObj = reactive<number[]>([0, 12])

let [min, max] = toRefs(isShowObj);

const renderArr = ref<any[]>([]);

renderArr.value = arr.slice(0, 12);
const isChange = (e: any) => {
  nextTick(() => {
    // console.log(min);

    min.value = +((e?.target?.scrollTop) / 38).toFixed(0);
    max.value = min.value + 12;

    renderArr.value = arr.slice(min.value, max.value);

    // console.log(renderArr);

  })
}


false && ElMessageBox.confirm(
  '是否确认?',
  'Warning',
  {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  }
)
  .then(() => {
    ElMessage({
      type: 'success',
      message: 'Delete completed',
    })
  })
  .catch(() => {
    ElMessage({
      type: 'info',
      message: 'Delete canceled',
    })
  })


const vIsPro: Directive = (dirObj as any).vIsPro;

const toSub = () => {
  window.alert('有权限哦！！！');
};

type Prop = {
  title: string
}

// console.log((import.meta as any).env);


const Btn = (prop: Prop, ctx: any): VNode => {
  return h('div', {
    class: ['bg-red-300'],
    onclick() {
      // console.log(11);
    }
  }, ctx?.slots?.default())
}


// // console.log(111111111111);

// setTimeout(() => {
//   // console.log(111111111111);
//   setTimeout(async () => {
//     await Promise.resolve().then(() => {
//       // console.log(22222222222);
//     })
//     // console.log(333333333333333);
//   })
// }, 0);

// setTimeout(async () => {
//   // console.log(4444444444444);
//   await Promise.resolve().then(() => {
//     // console.log(55555555555555);
//   })
//   // console.log(666666666666);
// }, 0);

const user1 = (user as any)();

const myuser = user1.$state;
// // console.log(user1.cUser('1', 2));

setTimeout(() => {
  user1.cUser('123', 2)
}, 1000);

const cssObj = useCssModule();

// // console.log(cssObj, cssObj?.cell);

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>


<style scoped lang="scss">
.mysty-co {
  color: var(--my-color);
}

.mysty-co11 {
  color: var(--my-color1);
  ;
  border: 1px solid var(--my-color1);
}

.container {
  display: grid;
  width: 400px;
  height: 400px;
  margin: 20px auto;
  background-color: antiquewhite;

  // minmax 优先级高，前面的属性会自由伸缩
  grid-template-columns: [c1] 100px [c2] minmax(100px, 200px) [c3] minmax(10px, 200px) [c4] minmax(10px, 200px) [c5];
  // grid-template-columns: 100px minmax(100px, 200px);
  // grid-template-columns: repeat(2, 100px);
  // grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 100px);

  // row-gap: 10px; 
  // column-gap: 10px;

  gap: 20px 40px; //row col

  grid-template-areas: 'a b c i' 'a b c i' 'a b c i';

  grid-auto-flow: row;

  // grid-auto-flow: row dense; 补齐

  justify-items: center;
  // 竖直方向
  align-items: center;


  justify-content: center;
  align-content: center;

  //多出来的宽高
  grid-auto-rows: 20px;
  grid-auto-columns: 20px;


  .item {
    display: inline-block;
    width: 20px;
    height: 20px;

    &.item1 {
      width: 100%;
      height: 100%;
      background-color: red;
      // 和前面网格线结合 定位
      // grid-column: 1 / 3;
      // grid-row: span 2;
      // grid-area: b;
      grid-area: 1/1/ 3/3;

      justify-self: start;
      align-self: start;
    }
  }
}

.self {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  .item {
    width: 20px;
  }

  .item:last-of-type {
    align-self: flex-start;
  }
}
</style>
<style scoped lang="scss" module>
.el-table--fit.el-table--enable-row-hover.el-table--enable-row-transition.el-table.el-table--layout-fixed.is-scrolling-none {
  margin: auto;

  :deep() {
    .cell {
      color: red;
    }
  }
}

.red {
  color: red;
}

.pad {
  padding: 0 20px;
}
</style>