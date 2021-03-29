(ns ^:figwheel-hooks walkthrough.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [clojure.string :as str]
   [cljsjs.d3]
  ;; [libpython-clj2.require :refer [require-python]]
  ;; [libpython-clj2.python :as py :refer [py. py.. py.- $.]]
   ))

(def height 450)
(def width 540)


(defn append-svg []
  (-> js/d3
      (.select "#slopegraph")
      (.append "svg")
      (.attr "height" height)
      (.attr "width" width)))


(append-svg)


;;===================================
;; To-Do
;; - Input button
;; - Sentence Parser
;; - Reset Button
;; - Parchment Background
;; - Add borders
;; - Text-Wrapped Boxes


(def button-style
  {:background-image  "url(./parchment.png)"
   :border  "3px solid black"
   :font-weight "bold"
   :margin-right "3px"
   :margin-top "3px"})

(def sentences
  (atom []))

(def blurred-style
  {:color  "transparent"
   :text-shadow "0 0 5px rgba(0,0,0,0.5)"})

(def default-style
  {:color "black"
   :text-shadow nil})

(def blur-style
  (atom {:style default-style}))

(defn blurred? []
  (->> blur-style
       deref
       :style
       :color
       (=  "transparent")))

(defn blur-button []
  [:input {:type "button"
           :value (if (blurred?) "Reveal Text" "Hide Text")
           :style button-style
           :on-click (fn []
                       (if (blurred?)
                         (swap! blur-style assoc :style default-style)
                         (swap! blur-style assoc :style blurred-style)))}])



(def recreations (atom []))

(defn gen-sentences []
  
  [:table
   {:style {:width "50%"
            :border "3px solid black" }}
   
   [:tr (for [col ["Original Text" "Notes" "Recreation"]]
          [:th col])]
   
   (doall
    
    (let [counter (atom 0)]
      
      (for [sentence @sentences]
        
        (when (some #(not (= " " %)) sentence)
          
          (let [index @counter]
            
            (swap! counter inc)
            (swap! recreations conj {:index index
                                     :original-text sentence
                                     :recreation ""})
            
            [:tr {:style button-style}
             [:td @blur-style sentence]
             [:td [:textarea {:style button-style}]]
             [:td [:textarea {:style button-style
                              :on-change (fn [e]
                                           (swap! recreations
                                                  assoc-in
                                                  [index :recreation]
                                                  (-> e .-target .-value)))}]]])))))])

(def input-text (atom ""))

(defn text-submission-box []
  [:textarea
   {:value @input-text
    :style button-style
    :on-change (fn [e]
                 (reset! input-text (-> e .-target .-value)))}])

(defn text-submission-button []
  [:input
   {:type "button"
    :value "Add Text"
    :style button-style
    :on-click (fn [e]
                (reset! sentences
                        (str/split @input-text #"\.|!")))}])



(defn reset-text-button []
  [:input {:type "button"
           :value "Reset Text"
           :style button-style
           :on-click (fn [e]
                       (reset! input-text "")
                       (reset! sentences [])
                       (reset! recreations []))}])

(defn get-json-button []
  [:input {:type "button"
           :value "Get Json"
           :style button-style
           :on-click (fn [e]
                       (->> recreations
                            deref
                            clj->js
                            js/console.log))}])


(defn gen-html []
  [:div {:style {:margin-left "10px" :font-family "Courier"}}
   [:h1 "EssAI"]
   [:p "Please enter the target text into the box below."]
   (text-submission-box)
   [:br] 
   (text-submission-button)
   [:br] [:br]
   (blur-button)
   (reset-text-button)
   [:br] [:br]
   (get-json-button)
   [:br] [:br]
   (gen-sentences)])



;;================================================================================
;; Mounting

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (rdom/render [gen-html] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (mount-app-element))

(defn multiply [a b] (* a b))
