<?php

namespace app\index\controller;

use Jenssegers\Agent\Agent;
use think\Controller;
use think\Db;
use think\Exception;

class Index extends Base
{
    public function index()
    {
        $post = input('post.');
        $agent = new Agent();

        if ($agent->isRobot()) {
            $this->error('机器人行为，请联系管理员', null, '', 10);
        }

        $browser = $agent->browser();
        $platform = $agent->platform();

        //提交
        if ($post) {
            //验证码
            if (empty($post['name']) || empty($post['temperature'])
                || empty($post['journey']) || empty('date')) {
                $this->error('请完善表单再提交');
            }
            if ($post['temperature'] > 44 || $post['temperature'] < 34 || !is_numeric($post['temperature'])) {
                $this->error('请填写正常范围体温，大于35并小于43的数字或小数');
            }
            $post['name'] = trim($post['name']);

            //数据保存
            try {

                //当前只有保存1份
                Db::name('record')
                    ->where(['date' => $post['date'], 'name' => $post['name']])
                    ->update(['del' => 1, 'update_time' => time()]);

                $data = [
                    'ip' => request()->ip(),
                    'device' => $agent->device(),
                    'platform' => $agent->platform(),
                    'browser' => $browser,
                    'version' => $agent->version($browser),
                    'system_version' => $agent->version($platform),
                    'name' => trim($post['name']),
                    'temperature' => $post['temperature'],
                    'journey' => $post['journey'],
                    'date' => $post['date'],
                    'fever' => $post['fever'] == 1 ? '否' : '是',
                    'cold' => $post['cold'] == 1 ? '否' : '是',
                    'create_time' => time(),
                ];
                Db::name('record')->insert($data);
                $this->success('提交成功');

            } catch (Exception $e) {
                var_dump($e);
                exit;
                $this->error('提交失败，请系统管理员:' . $e->getMessage(), null, '', 10);
            }
        }
        return $this->fetch();
    }

    public function data()
    {

    }

}
