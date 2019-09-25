# formwell

Formwell是一个用来显示表格的React Component。

### 特性
* 支持tab和分页
* 支持数据的级联显示
* 支持数据的增删改查
* 支持数据导出为JSON

### 接受的属性

**`data`**

通过mutated数据表示的数据结构。需要注意的是mutated数据的嵌套方式可能有很多种，但是formwell所支持的方式是：

* `Group`的下一级只能为`Group`或`List`，
* `List`中只能包含`Record`
* `Record`中的`subs`只能包含`List`

关于Group, List和Record的使用方法请参看mutated的文档。

需要特别注意的是，mutated数据结构中的某些属性，是专门为了formwell预留的。比如Group是专门为
标签显示而设的，因此Group中有一个选项是tabStyle，通过这个选项可以指明标签控制是标签分页还是
左右导航分页。

**`tableAttr`**

表格的全局控制，比如是否允许展开下一级，是否允许编辑等。均为可选项。

* `expandable` : 是否允许展开下一级
* `editable` : 是否允许编辑

**`head`**

表格每列的信息，内容至关重要。`head`是个`List`，其中包含的元素均为`Object`。每个Object包含以下内容:

* `colKey` : 与`Record`中的字段名对应。
* `colDesc` : 字段名的解释，会作为表头显示出来
* `cellType` : 字段的类型，字符串，可以是以下几种，特别注意所有选项首字母均大写
    * `Display` 
    普通的显示，会简单区分Number和其它类型
    * `RotateDisplay`
     轮换显示，当鼠标单击单元格时会在几种类型的内容之间轮换显示，接受一个Object类型的数据
    * `MultiRotateDisplay`:
    一个单元格中包含若干个RotateDisplay
    * `SingleSelect`
    单选
    * `CascadeSelect`
    级联多选，下一个单选的选项依赖上一个已选的选项。
    * `options`
    单选/级联多选时采用，选项，也是一个List of Records。
    * `displayKey`
    单选/级联多选时采用，在`options`中要显示的字段
* `cellStyle`：字段样式
目前只区分`display`和`control`，即正常显示的表格单元格，与表格右侧悬停才出现的工具栏。