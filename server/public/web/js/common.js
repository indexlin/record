/**
 * 设置前端市区镇
 * @param city_name  select元素 市的类名
 * @param district_name select元素 区的类名
 * @param town_name select元素 镇的类名
 */
function setArea(city_name, district_name, town_name, default_city_id, default_district_id, default_town_id) {

    var city_select_html = '<option value="0">全地区</option>';
    var district_select_html = '<option value="0">全地区</option>';
    var town_select_html = '<option value="0">全地区</option>';

    //渲染所有市
    console(area_json);
    for (var i in area_json) {
        if (area_json[i]['level'] == 2) {
            city_select_html += '<option value="' + area_json[i]["area_id"] + '">' + area_json[i]["name"] + '</option>';
        }
    }
    $(city_name).html(city_select_html);

    //设置了默认市,并渲染下级地区
    if (default_city_id != 0) {
        $(city_name).val(default_city_id);
        for (var i in area_json) {
            if (area_json[i]['parent_id'] == default_city_id) {
                district_select_html += '<option value="' + area_json[i]["area_id"] + '">' + area_json[i]["name"] + '</option>';
            }
        }

    }
    $(district_name).html(district_select_html);

    //设置了默认县区,并渲染下级镇
    if (default_district_id != 0) {
        $(district_name).val(default_district_id);
        for (var i in area_json) {
            if (area_json[i]['parent_id'] == default_district_id) {
                town_select_html += '<option value="' + area_json[i]["area_id"] + '">' + area_json[i]["name"] + '</option>';
            }
        }

    }
    $(town_name).html(town_select_html);

    //设置默认镇
    if (default_town_id != 0) {
        $(town_name).val(default_town_id);
    }

    //切换市事件
    $(city_name).change(function () {
        var district_select_html = '<option value="0">全地区</option>';
        var city_id = $(this).val();
        if (city_id != 0) {
            for (var i in area_json) {
                if (area_json[i]['parent_id'] == city_id) {
                    district_select_html += '<option value="' + area_json[i]["area_id"] + '">' + area_json[i]["name"] + '</option>';
                }
            }
        }
        $(district_name).html(district_select_html);
        var town_select_html = '<option value="0">全地区</option>';
        $(town_name).html(town_select_html);
    });

    //切换县区事件
    $(district_name).change(function () {
        var town_select_html = '<option value="0">全地区</option>';
        var district = $(this).val();
        if (district != 0) {
            for (var i in area_json) {
                if (area_json[i]['parent_id'] == district) {
                    town_select_html += '<option value="' + area_json[i]["area_id"] + '">' + area_json[i]["name"] + '</option>';
                }
            }
        }
        $(town_name).html(town_select_html)
    });
}


function setCat(first_cat_name, second_cat_name, default_first_cat_id, default_second_cat_id) {
    var first_cat_select_html = '<option value="0">所有大分类</option>';
    var second_cat_select_html = '<option value="0">所有子分类</option>';

    //渲染大分类
    for (var i in cat_json) {
        if (cat_json[i]['level'] == 1) {
            first_cat_select_html += '<option value="' + cat_json[i]["cat_id"] + '">' + cat_json[i]["name"] + '</option>';
        }
    }
    $(first_cat_name).html(first_cat_select_html);

    //设置默认大分类,并渲染子分类
    if (default_first_cat_id != 0) {
        $(first_cat_name).val(default_first_cat_id);
        for (var i in cat_json) {
            if (cat_json[i]['parent_id'] == default_first_cat_id) {
                second_cat_select_html += '<option value="' + cat_json[i]["cat_id"] + '">' + cat_json[i]["name"] + '</option>';
            }
        }
    }
    $(second_cat_name).html(second_cat_select_html);

    //设置默认子分类
    if (default_second_cat_id != 0) {
        $(second_cat_name).val(default_second_cat_id);
    }

    //分类切换事件
    $(first_cat_name).change(function () {
        var second_cat_select_html = '<option value="0">所有子分类</option>';
        var first_cat_id = $(this).val();
        if (first_cat_id != 0) {
            for (var i in cat_json) {
                if (cat_json[i]['parent_id'] == first_cat_id) {
                    second_cat_select_html += '<option value="' + cat_json[i]["cat_id"] + '">' + cat_json[i]["name"] + '</option>';
                }
            }
        }
        $(second_cat_name).html(second_cat_select_html);

    });

}

/**
 * 渲染工资待遇
 * @param salary_name
 * @param default_salary
 */
function setSalary(salary_name, default_salary) {
    var salary_html = '';
    for (var i in salary_json) {
        salary_html += '<option value="' + i + '">' + salary_json[i] + '</option>';
    }
    $(salary_name).html(salary_html);
    $(salary_name).val(default_salary);
}

/**
 * 渲染工作类型
 * @param job_type_name
 * @param default_job_type
 */
function setJobType(job_type_name, default_job_type) {
    var job_type_html = '';
    for (var i in job_type_json) {
        job_type_html += '<option value="' + i + '">' + job_type_json[i] + '</option>';
    }
    $(job_type_name).html(job_type_html);
    $(job_type_name).val(default_job_type);
}

/**
 * 渲染企业规模
 * @param scale_name
 * @param default_scale_type
 */
function setScale(scale_name, default_scale_type) {
    var scale_html = '';
    for (var i in scale_json) {
        scale_html += '<option value="' + i + '">' + scale_json[i] + '</option>';
    }
    $(scale_name).html(scale_html);
    $(scale_name).val(default_scale_type);
}

/**
 * 设置菜单
 * @param menu_name
 */
function setMenu(menu_name) {
    var company_message_count=$('.red-badge-hide').attr('data-company-message-count');
    if(company_message_count){
        if(company_message_count!=0){
            company_message_count=company_message_count>99?'…':company_message_count;
            $('.red-badge-hide').text(company_message_count);
            $('.red-badge-hide').attr('class','red-badge-show');
        }
    }
    $('.attention-red-hide').each(function(){
        attention=$(this).attr('data-attention');
        if(attention==0){
            $(this).attr('class','attention-red-show');
        }
    });
    span=$(menu_name).children('span');
    $(span[0]).removeClass('menu-job-logo');
    $(span[2]).removeClass('menu-job-font');
    $(span[0]).addClass('menu-job-logo-active');
    $(span[2]).addClass('menu-job-font-active');
}

/**
 * 通过地区id获取地区名
 * @param area_id
 * @returns {string}
 */
function getAreaNameById(area_id) {
    for (var i in area_json) {
        if (area_json[i]['area_id'] == area_id) {
            return area_json[i]['name'];
        }
    }
    return '';
}

/**
 * 获取工作类型中文名称
 * @param job_type
 */
function getJobType(job_type) {
    var id=parseInt(job_type);
    return job_type_json[id];
}

/**
 * 获取工资中文名称
 * @param salary
 */
function getSalary(salary) {
    var id=parseInt(salary);
    return salary_json[id];
}

/**
 * 获取公司规模中文名称
 * @param scale
 */
function getScale(scale) {
    var id=parseInt(scale);
    return scale_json[id];
}

/**
 * 获取分类名称
 * @param cat_id
 * @returns {string}
 */
function getCatById(cat_id) {
    for (var i in cat_json) {
        if (cat_json[i]['cat_id'] == cat_id) {
            return cat_json[i]['name'];
        }
    }
    return '';
}

//长按事件
$.fn.longPress = function(fn) {
    var timeout = undefined;
    var $this = this;
    for(var i = 0;i<$this.length;i++){
        $this[i].addEventListener('touchstart', function(event) {
            timeout = setTimeout(fn, 2400);
        }, false);
        $this[i].addEventListener('touchend', function(event) {
            clearTimeout(timeout);
        }, false);
    }
}