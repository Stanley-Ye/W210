// Compiled by ClojureScript 1.10.773 {}
goog.provide('walkthrough.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
goog.require('cljsjs.d3');
walkthrough.core.height = (450);
walkthrough.core.width = (540);
walkthrough.core.append_svg = (function walkthrough$core$append_svg(){
return d3.select("#slopegraph").append("svg").attr("height",walkthrough.core.height).attr("width",walkthrough.core.width);
});
walkthrough.core.append_svg.call(null);
walkthrough.core.button_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),"url(./parchment.png)",new cljs.core.Keyword(null,"border","border",1444987323),"3px solid black",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"3px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px"], null);
walkthrough.core.sentences = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
walkthrough.core.blurred_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"transparent",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"0 0 5px rgba(0,0,0,0.5)"], null);
walkthrough.core.default_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),null], null);
walkthrough.core.blur_style = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.default_style], null));
walkthrough.core.blurred_QMARK_ = (function walkthrough$core$blurred_QMARK_(){
return cljs.core._EQ_.call(null,"transparent",new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,walkthrough.core.blur_style))));
});
walkthrough.core.blur_button = (function walkthrough$core$blur_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),((walkthrough.core.blurred_QMARK_.call(null))?"Reveal Text":"Hide Text"),new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(walkthrough.core.blurred_QMARK_.call(null)){
return cljs.core.swap_BANG_.call(null,walkthrough.core.blur_style,cljs.core.assoc,new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.default_style);
} else {
return cljs.core.swap_BANG_.call(null,walkthrough.core.blur_style,cljs.core.assoc,new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.blurred_style);
}
})], null)], null);
});
walkthrough.core.recreations = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
walkthrough.core.gen_sentences = (function walkthrough$core$gen_sentences(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"border","border",1444987323),"3px solid black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function walkthrough$core$gen_sentences_$_iter__15561(s__15562){
return (new cljs.core.LazySeq(null,(function (){
var s__15562__$1 = s__15562;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15562__$1);
if(temp__5720__auto__){
var s__15562__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15562__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15562__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15564 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15563 = (0);
while(true){
if((i__15563 < size__4528__auto__)){
var col = cljs.core._nth.call(null,c__4527__auto__,i__15563);
cljs.core.chunk_append.call(null,b__15564,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col], null));

var G__15569 = (i__15563 + (1));
i__15563 = G__15569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15564),walkthrough$core$gen_sentences_$_iter__15561.call(null,cljs.core.chunk_rest.call(null,s__15562__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15564),null);
}
} else {
var col = cljs.core.first.call(null,s__15562__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col], null),walkthrough$core$gen_sentences_$_iter__15561.call(null,cljs.core.rest.call(null,s__15562__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Original Text","Notes","Recreation"], null));
})()], null),cljs.core.doall.call(null,(function (){var counter = reagent.core.atom.call(null,(0));
var iter__4529__auto__ = (function walkthrough$core$gen_sentences_$_iter__15565(s__15566){
return (new cljs.core.LazySeq(null,(function (){
var s__15566__$1 = s__15566;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15566__$1);
if(temp__5720__auto__){
var s__15566__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15566__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15566__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15568 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15567 = (0);
while(true){
if((i__15567 < size__4528__auto__)){
var sentence = cljs.core._nth.call(null,c__4527__auto__,i__15567);
cljs.core.chunk_append.call(null,b__15568,(cljs.core.truth_(cljs.core.some.call(null,((function (i__15567,sentence,c__4527__auto__,size__4528__auto__,b__15568,s__15566__$2,temp__5720__auto__,counter){
return (function (p1__15560_SHARP_){
return (!(cljs.core._EQ_.call(null," ",p1__15560_SHARP_)));
});})(i__15567,sentence,c__4527__auto__,size__4528__auto__,b__15568,s__15566__$2,temp__5720__auto__,counter))
,sentence))?(function (){var index = cljs.core.deref.call(null,counter);
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

cljs.core.swap_BANG_.call(null,walkthrough.core.recreations,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"original-text","original-text",744448452),sentence,new cljs.core.Keyword(null,"recreation","recreation",-1240476816),""], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.deref.call(null,walkthrough.core.blur_style),sentence], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__15567,index,sentence,c__4527__auto__,size__4528__auto__,b__15568,s__15566__$2,temp__5720__auto__,counter){
return (function (e){
return cljs.core.swap_BANG_.call(null,walkthrough.core.recreations,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"recreation","recreation",-1240476816)], null),e.target.value);
});})(i__15567,index,sentence,c__4527__auto__,size__4528__auto__,b__15568,s__15566__$2,temp__5720__auto__,counter))
], null)], null)], null)], null);
})():null));

var G__15570 = (i__15567 + (1));
i__15567 = G__15570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15568),walkthrough$core$gen_sentences_$_iter__15565.call(null,cljs.core.chunk_rest.call(null,s__15566__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15568),null);
}
} else {
var sentence = cljs.core.first.call(null,s__15566__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.some.call(null,((function (sentence,s__15566__$2,temp__5720__auto__,counter){
return (function (p1__15560_SHARP_){
return (!(cljs.core._EQ_.call(null," ",p1__15560_SHARP_)));
});})(sentence,s__15566__$2,temp__5720__auto__,counter))
,sentence))?(function (){var index = cljs.core.deref.call(null,counter);
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

cljs.core.swap_BANG_.call(null,walkthrough.core.recreations,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"original-text","original-text",744448452),sentence,new cljs.core.Keyword(null,"recreation","recreation",-1240476816),""], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.deref.call(null,walkthrough.core.blur_style),sentence], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (index,sentence,s__15566__$2,temp__5720__auto__,counter){
return (function (e){
return cljs.core.swap_BANG_.call(null,walkthrough.core.recreations,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"recreation","recreation",-1240476816)], null),e.target.value);
});})(index,sentence,s__15566__$2,temp__5720__auto__,counter))
], null)], null)], null)], null);
})():null),walkthrough$core$gen_sentences_$_iter__15565.call(null,cljs.core.rest.call(null,s__15566__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.deref.call(null,walkthrough.core.sentences));
})())], null);
});
walkthrough.core.input_text = reagent.core.atom.call(null,"");
walkthrough.core.text_submission_box = (function walkthrough$core$text_submission_box(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,walkthrough.core.input_text),new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,walkthrough.core.input_text,e.target.value);
})], null)], null);
});
walkthrough.core.text_submission_button = (function walkthrough$core$text_submission_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Add Text",new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.reset_BANG_.call(null,walkthrough.core.sentences,clojure.string.split.call(null,cljs.core.deref.call(null,walkthrough.core.input_text),/\.|!/));
})], null)], null);
});
walkthrough.core.reset_text_button = (function walkthrough$core$reset_text_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Reset Text",new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
cljs.core.reset_BANG_.call(null,walkthrough.core.input_text,"");

cljs.core.reset_BANG_.call(null,walkthrough.core.sentences,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,walkthrough.core.recreations,cljs.core.PersistentVector.EMPTY);
})], null)], null);
});
walkthrough.core.get_json_button = (function walkthrough$core$get_json_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Get Json",new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return console.log(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,walkthrough.core.recreations)));
})], null)], null);
});
walkthrough.core.gen_html = (function walkthrough$core$gen_html(){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Courier"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"EssAI"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Please enter the target text into the box below."], null),walkthrough.core.text_submission_box.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),walkthrough.core.text_submission_button.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),walkthrough.core.blur_button.call(null),walkthrough.core.reset_text_button.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),walkthrough.core.get_json_button.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),walkthrough.core.gen_sentences.call(null)], null);
});
walkthrough.core.get_app_element = (function walkthrough$core$get_app_element(){
return goog.dom.getElement("app");
});
walkthrough.core.mount = (function walkthrough$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [walkthrough.core.gen_html], null),el);
});
walkthrough.core.mount_app_element = (function walkthrough$core$mount_app_element(){
var temp__5720__auto__ = walkthrough.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return walkthrough.core.mount.call(null,el);
} else {
return null;
}
});
walkthrough.core.mount_app_element.call(null);
walkthrough.core.on_reload = (function walkthrough$core$on_reload(){
return walkthrough.core.mount_app_element.call(null);
});
walkthrough.core.multiply = (function walkthrough$core$multiply(a,b){
return (a * b);
});

//# sourceMappingURL=core.js.map
