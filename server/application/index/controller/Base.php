<?php


namespace app\index\controller;


use think\Controller;

class Base extends Controller
{
    public function initialize()
    {
        parent::initialize();
        $this->assign('versions', 1);
    }
}