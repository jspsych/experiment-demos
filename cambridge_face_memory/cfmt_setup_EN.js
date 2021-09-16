const img_category = 'faces'
const inverted = false

const place_h = img_category.slice(0, -1) // place holder for the singular form of the category name

const img_path = 'assets/images/ready/'

const randomize_view = false 
const randomize_ID = false

const cars_key_list =   [ [ [1,1,2] ], [ [3,3,2], [1,2,1], [3,1,2], [2,2,3], [2,1,3], [1,2,3] ], [2,1,1,3,2,1,3,1,1,3,3,3,2,2,3,2,1,1,2,1,1,1,3,2,2,3,2,2,1,1], [2,3,3,1,2,2,1,1,2,1,1,3,2,3,3,2,2,2,2,2,3,3,1,3] ]
const faces_key_list = [ [ [1,2,2] ], [ [2,3,3], [2,3,3], [3,3,1], [2,3,1], [3,1,3], [1,3,1] ], [1,2,1,3,3,2,1,3,2,3,2,3,2,1,2,2,2,2,1,3,1,2,2,1,3,1,2,1,1,3], [2,3,1,1,3,1,2,1,2,2,2,2,1,2,1,2,3,1,3,1,1,1,1,3] ]

const image_height = 200
const review_height = image_height*2.5
const learn_duration = 3000
const review_duration = 20000

const prac_prep_msg = '<p><strong>PRACTICE</strong></p><p>Memorize the ${IMG_CAT} in the next three images.</p><p>A test will follow.</p><p>Press any key on your keyboard to begin.</p>'

const prac_prompt_msg = ['<p>Memorize the ${IMG_CAT}s.</p>','<p>Which ${IMG_CAT} did you just view? There is only one correct answer. Press 1, 2 or 3.</p>']

const part01_prep_msg = "<p>These were the practice trials.</p>" +
                        "<p>In <em>this</em> test, you will learn to recognize six ${IMG_CAT}s.</p>" +
                        "<p>Great! Let's go on and do the actual test.</p>"
                        "<p>To begin memorizing the first ${IMG_CAT}, press any key on your keyboard</p>"

const part01_btw_msg = "<p>Memorize the following ${IMG_CAT}.</p><p>Press any key to continue.</p>"

const part01_prompt_msg = ['<p>Memorize the ${IMG_CAT}s</p>','<p>Which ${IMG_CAT} did you just view?</p>']

const review_prep_msg = 'Next you will review the same six ${IMG_CAT}s for ${REV_DUR} seconds. Press any key on your keyboard.'

const review_prompt_msg = '<p>Review the ${IMG_CAT}s (${REV_DUR} seconds)</p>'

const part02_prep_msg = '<p>Now your memory of these ${IMG_CAT}s will be tested. In the remaining trials, the correct answer can be any of the six ${IMG_CAT}s.</p>' + 
                        '<p>The incorrect ${IMG_CAT}s are sometimes very similar to the target ${IMG_CAT}s, so be sure to look at each ${IMG_CAT} prior to answering.</p>' +
                        '<p>Press any key to begin.</p>'

const part02_prompt_msg = '<p>Which ${IMG_CAT} is one of the six target ${IMG_CAT}s?</p>'


const part03_prompt_msg = '<p>Which ${IMG_CAT} is one of the six target ${IMG_CAT}s?</p>'
